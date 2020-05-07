import { Modal, Form, Input, Select, Radio, InputNumber } from "antd";
import React, { useReducer, useState } from "react";

import Button from "./Button";
import { CreateNewCustomerForm } from "./CreateCustomerForm";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GetDealersAndRegions, Customer } from "../queries/queries";
import { CREATE_CUSTOMER, UPDATE_CUSTOMER } from "../queries/mutations";
import { makeTableItem, Item, CustomerFromQuery } from "./CustomersEditable";
import {
  useGetDealersAndRegionsQuery,
  useUpdateCustomerMutation,
} from "../generated/generated_graphql";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  // marginTop: 10,
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

type Props = {
  isModalVisible: boolean;
  setModalState: Function;
  customerToEdit: Customer;
  dealersAndRegionsData: any;
  setData: React.Dispatch<React.SetStateAction<Item[]>>;
};

export function EditCustomerModal(props: Props) {
  const {
    isModalVisible,
    setModalState,
    customerToEdit,
    dealersAndRegionsData,
    setData,
  } = props;

  console.log("EditCustomerModal: customerToEdit ", customerToEdit);

  const [
    updateCustomerByCustomerId,
    updateMutation,
  ] = useUpdateCustomerMutation({
    onCompleted(response) {
      const customer: CustomerFromQuery =
        response.updateCustomerByCustomerId.customer;
      setData((data) => {
        const changedDataRow = makeTableItem(customer);
        const index = data.findIndex((row) => {
          return row.customerId === customer.customerId;
        });
        const newData = [...data];
        newData[index] = changedDataRow;
        return newData;
      });
    },
  });
  const dealers = dealersAndRegionsData.allDealers.nodes;
  const regions = dealersAndRegionsData.allRegions.nodes;

  const regionMap: { [key: number]: string } = {};
  regions.forEach((region) => {
    regionMap[region.regionId] = region.name;
  });

  return (
    <div>
      <Modal
        title="Edit Customer"
        visible={isModalVisible}
        footer={null}
        onCancel={() => {
          setModalState({ visible: false, record: null });
        }}
      >
        {!isModalVisible ? (
          <></>
        ) : (
          <Form
            {...layout}
            initialValues={{
              customer: {
                name: customerToEdit.name,
                address: customerToEdit.address || "",
                phone: customerToEdit.phone || "",
                note: customerToEdit.note || "",
                region: customerToEdit.regionId,
                dealer: customerToEdit.dealerId,
              },
            }}
            name="nest-messages"
            onFinish={({ customer }) => {
              console.log("hello", customer);

              if (customer.region === "") {
                customer.region = undefined;
              }
              const variables = {
                customerId: customerToEdit.customerId,
                name: customer.name,
                address: customer.address,
                phone: customer.phone,
                regionId: customer.region,
                dealerId: customer.dealer,
                note: customer.note,
              };
              console.log(variables);
              updateCustomerByCustomerId({
                variables,
              });
              setModalState({ visible: false, record: null });
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["customer", "name"]}
              label="Name"
              rules={[{ required: true, max: 150 }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["customer", "address"]} label="Address">
              <Input />
            </Form.Item>
            <Form.Item name={["customer", "phone"]} label="Phone">
              <Input />
            </Form.Item>
            <Form.Item name={["customer", "region"]} label="Region">
              <Select>
                {regions.map((region) => {
                  return (
                    <Select.Option
                      key={region.regionId}
                      value={region.regionId}
                    >
                      {region.regionId} {region.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name={["customer", "dealer"]}
              label="Dealer"
              rules={[{ required: true }]}
            >
              <Select>
                {dealers.map((dealer) => {
                  return (
                    <Select.Option
                      key={dealer.dealerId}
                      value={dealer.dealerId}
                    >
                      {dealer.dealerId} {dealer.name}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item name={["customer", "note"]} label="Note">
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" name="Submit"></Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  );
}
