import { NextPage } from "next";
import React, { useContext } from "react";

import EditableTable from "../components/EditableTable";
import { Grid } from "@material-ui/core";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { LanguageContext } from "./_app";

const Invoices: NextPage = () => {
  const router = useRouter();
  const strings = useContext(LanguageContext);
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>{strings.invoices}</h1>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button name={strings.recordPayments}></Button>
          <Button
            onClick={() => {
              router.push("/new-invoice");
            }}
            name={strings.createInvoice}
          ></Button>
        </Grid>
      </Grid>
      <EditableTable></EditableTable>
    </>
  );
};

export default Invoices;
