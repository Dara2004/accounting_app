import { Form, Input, InputNumber, Button, Select, Radio } from "antd";
import { useState } from "react";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  marginTop: 10,
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

const initialState = {
  name: "",
  address: "",
  regionId: 0,
  dealerId: 0,
  phone: "",
  note: "",
  shippingCompany: 0,
  shippingCustomer: 0,
};

export const CreateNewCustomerForm = ({ dealers, regions, parentDispatch }) => {
  const onFinish = ({ user }) => {
    parentDispatch({ type: "createCustomer", customer: user }); //giving the child the ability to call dispatch
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
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
              <Select.Option value={region.regionId}>
                {region.regionId} {region.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item name={["customer", "dealer"]} label="Dealer">
        <Select>
          {dealers.map((dealer) => {
            return (
              <Select.Option value={dealer.dealerId}>
                {dealer.dealerId} {dealer.name}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>

      <Form.Item name={["customer", "note"]} label="Note">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={["customer", "radio-group"]} label="Shipping">
        <Radio.Group>
          <Radio value="customer">Paid by customer</Radio>
          <Radio value="company">Paid by company</Radio>
          <Input style={{ marginTop: 5 }} />
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
