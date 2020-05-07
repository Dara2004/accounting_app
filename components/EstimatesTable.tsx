/* eslint-disable react/display-name */
import { Form, Input, InputNumber, Popconfirm, Table } from "antd";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { DELETE_CUSTOMER, UPDATE_CUSTOMER } from "../queries/mutations";
import { GetCustomers, Customer } from "../queries/queries";
import { EditCustomerModal } from "./EditCustomerModal";
import { useGetDealersAndRegionsQuery } from "../generated/generated_graphql";

const NONE = -1;

export interface Item {
  estimateId: number;
  status: string;
  date: string;
  customerId: number;
  amount: number;
  memo: string;
  accountId: number;
}

export function makeTableItem(curr: Customer): Item {
  return {
    customerId: curr.customerId,
    name: curr.name,
    address: curr.address || "",
    phone: curr.phone || "",
    region: curr.regionId,
    dealerId: curr.dealerId,
    dealerName: curr.dealerByDealerId.name,
    note: curr.note || "",
  };
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Item;
  index: number;
  children: React.ReactNode;
}

// const EditableCell: React.FC<EditableCellProps> = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{ margin: 0 }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

const EstimatesTable = () => {
  const [deleteCustomerByCustomerId, mutation] = useMutation(DELETE_CUSTOMER);
  const [updateCustomerByCustomerId, updateCustomerMutation] = useMutation(
    UPDATE_CUSTOMER
  );
  const customers: Customer[] = customersData.allCustomers.nodes;
  const [data, setData] = useState(customers.map(makeTableItem));
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(NONE);
  const [modalState, setModalState] = useState({
    visible: false,
    record: null,
  });
  const isEditing = (record: Item) => record.customerId === editingKey;
  const cancel = () => {
    setEditingKey(NONE);
  };
  const handleDelete = (cId) => {
    deleteCustomerByCustomerId({
      variables: {
        customerId: cId,
      },
    });
    updateTable(cId);
  };
  const updateTable = (cid: number) => {
    setData((prevCustomers) => {
      const updatedCustomers = prevCustomers.filter(
        (c) => c.customerId !== cid
      );
      return updatedCustomers;
    });
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "customerId",
      width: "5%",
      editable: false,
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
      editable: false,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: "20%",
      editable: false,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",
      editable: false,
    },
    {
      title: "Region",
      dataIndex: "region",
      width: "5%",
      editable: false,
    },
    {
      title: "Dealer",
      dataIndex: "dealerName",
      width: "15%",
      editable: false,
    },
    {
      title: "Notes",
      dataIndex: "note",
      width: "15%",
      editable: false,
    },
    {
      title: "Shipping Company",
      dataIndex: "shippingCompany",
      width: "10%",
      editable: false,
    },
    {
      title: "Shipping Customer",
      dataIndex: "shippingCustomer",
      width: "10%",
      editable: false,
    },
    {
      title: "",
      dataIndex: "operation",
      render: (_: any, record: Item) => {
        // const editable = isEditing(record);
        return (
          <>
            <a
              onClick={() => {
                // Trigger a state change
                setModalState({
                  visible: true,
                  record: customers.find(
                    (c) => c.customerId === record.customerId
                  ),
                });
                // handleEdit(record);
              }}
            >
              Edit
            </a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                handleDelete(record.customerId);
              }}
            >
              <a>Delete</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        rowKey="customerId"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        // bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
      <EditCustomerModal
        isModalVisible={modalState.visible}
        setModalState={setModalState}
        customerToEdit={modalState.record}
        dealersAndRegionsData={dealersAndRegionsData}
        setData={setData}
      ></EditCustomerModal>
    </Form>
  );
};

export default EstimatesTable;
