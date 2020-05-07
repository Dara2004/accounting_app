import { NextPage } from "next";
import React, { useContext, useReducer, useState } from "react";
import { GetCustomers, GetDealersAndRegions } from "../queries/queries";

import CustomersEditable from "../components/CustomersEditable";

import { LanguageContext } from "./_app";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QueryData } from "@apollo/react-hooks/lib/data/QueryData";
import { VariablesInAllowedPositionRule } from "graphql";
import Button from "../components/Button";
import Row from "../components/Row";
import { Grid } from "@material-ui/core";
import { CreateCustomerModal } from "../components/CreateCustomerModal";
import { CREATE_CUSTOMER } from "../queries/mutations";
import {
  useGetDealersAndRegionsQuery,
  useGetCustomersQuery,
  useCreateCustomerMutation,
} from "../generated/generated_graphql";

const Customers = () => {
  const allCustomersQuery = useGetCustomersQuery();
  const dealersAndRegionsQuery = useGetDealersAndRegionsQuery();
  useCreateCustomerMutation();
  const [createCustomer, mutation] = useCreateCustomerMutation();

  const strings = useContext(LanguageContext);
  const [isModalVisible, setModalVisible] = useState(false);
  if (allCustomersQuery.loading || dealersAndRegionsQuery.loading) {
    return <p>Loading...</p>;
  }
  if (allCustomersQuery.error) {
    return <p>Error! {allCustomersQuery.error}</p>;
  }
  if (dealersAndRegionsQuery.error) {
    return <p>Error! {dealersAndRegionsQuery.error}</p>;
  }
  if (mutation.loading) return <p>Adding new customer...</p>;
  if (mutation.data) {
    // TODO: refresh
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>{strings.customers}</h1>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            name="Create New Customer"
            onClick={() => {
              setModalVisible(true);
            }}
          />
          <CreateCustomerModal
            isModalVisible={isModalVisible}
            setVisible={setModalVisible} //lisf up the state of the child (button) completely since react wont redender if just pass isModalVisible in as props, need both isModalVisible and setisModalVisible to trigger rerender
            createCustomer={createCustomer}
          ></CreateCustomerModal>
        </Grid>
      </Grid>
      <CustomersEditable
        customersData={allCustomersQuery.data}
        dealersAndRegionsData={dealersAndRegionsQuery.data}
      />
    </>
  );
};

export default Customers;
