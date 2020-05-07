import { Modal, Form, Input, Select, Radio, InputNumber } from "antd";
import React, { useReducer, useState } from "react";

import Button from "./Button";
import { CreateNewCustomerForm } from "./CreateCustomerForm";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GetDealersAndRegions } from "../queries/queries";
import { CREATE_CUSTOMER } from "../queries/mutations";

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

export const CreateCustomerModal = ({
  isModalVisible,
  setVisible,
  createCustomer,
}) => {
  // const [state, dispatch] = useReducer(reducer, initialState); //state and dispatch are created by useReducer
  // const [visible, setVisible] = useState(isModalVisible);
  // console.log(visible);
  const { data, loading, error } = useQuery(GetDealersAndRegions);

  const dealers = data?.allDealers.nodes;
  const regions = data?.allRegions.nodes;
  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <Modal
        title="Create New Customer"
        visible={isModalVisible}
        footer={null}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={({ customer }) => {
            console.log(customer);
            setVisible(false);
            createCustomer({
              variables: {
                name: customer.name,
                address: customer.address,
                phone: customer.phone,
                regionId: customer.region,
                dealerId: customer.dealer,
                note: customer.note,
              },
            });
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["customer", "name"]}
            label="Name"
            rules={[{ required: true }]}
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
                  <Select.Option key={region.regionId} value={region.regionId}>
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
                  <Select.Option key={dealer.dealerId} value={dealer.dealerId}>
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
      </Modal>
    </div>
  );
};
