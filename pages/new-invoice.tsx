import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Paper,
  TextField,
  FormGroup,
  Container,
  Typography,
} from "@material-ui/core";
import PurpleButton from "../components/Button";
import { Form, DatePicker, TimePicker, Button, Input } from "antd";
import { Rule } from "antd/lib/form";
import Column from "../components/Column";
import Row from "../components/Row";
import { Card } from "antd";
import InvoiceTable from "../components/InvoiceTable/InvoiceTable";
import { useRouter } from "next/router";
const { MonthPicker, RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
  },
};

const onFinish = (fieldsValue) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue["range-picker"];
  const values = {
    ...fieldsValue,
    "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
  };
};
export default function NewInvoice() {
  return (
    <>
      <h1>New Invoice</h1>
      <Paper elevation={10} style={{ padding: "100px" }}>
        <div className="wrapper">
          <div className="logo">
            <img src="https://picsum.photos/seed/picsum/100/100"></img>
          </div>
          <div className="address">
            <h3>ESO LIFE</h3>
            <h4>8383 Montcalm St</h4>
          </div>
          <div className="receipt">
            <h1 style={{ paddingTop: 0, textAlign: "right" }}>INVOICE</h1>
          </div>
        </div>

        <div style={{ height: "5px" }} />
        <div style={{ height: "5px" }} />
        <Form
          name="time_related_controls"
          {...formItemLayout}
          onFinish={onFinish}
        >
          <Row spacing={1}>
            <Column item xs={4}>
              <Grid item>
                <Form.Item
                  name="customer-id"
                  label="BILL TO:"
                  className="ni-customer-id"
                >
                  <Input placeholder="customer id" />
                </Form.Item>
              </Grid>
              <Paper>
                <Grid item>
                  <Card style={{ height: 100 }}></Card>
                </Grid>
              </Paper>
            </Column>
            <Grid item xs={5} />
            <Grid item container xs={3} direction="column">
              <Grid item>
                <Form.Item name="invoice-id" label="Invoice Id:">
                  <Input placeholder="invoice id" />
                </Form.Item>
              </Grid>
              <Grid item>
                <Form.Item name="order-id" label="Order Id:">
                  <Input placeholder="order id" />
                </Form.Item>
              </Grid>
              <Grid item>
                <Form.Item name="date-picker1" label="TODO">
                  <DatePicker />
                </Form.Item>
              </Grid>
              <Grid item>
                <Form.Item name="date-picker2" label="TODO">
                  <DatePicker />
                </Form.Item>
              </Grid>
            </Grid>
          </Row>

          <div style={{ height: "30px" }}></div>
          <Form.Item name="invoice-items">
            <InvoiceTable />
          </Form.Item>

          <Form.Item>
            <Row justify="flex-end">
              <PurpleButton
                type="primary"
                htmlType="submit"
                name="Preview and Send"
              ></PurpleButton>
              <PurpleButton
                type="primary"
                htmlType="submit"
                name="Save Invoice"
                style={{ marginRight: 100 }}
              ></PurpleButton>
              <PurpleButton
                type="primary"
                htmlType="submit"
                name="&nbsp; Cancel &nbsp;"
              ></PurpleButton>
            </Row>
          </Form.Item>
        </Form>
      </Paper>

      <style jsx>
        {`
          .wrapper {
            display: grid;
            grid-template-columns: 2fr 4fr 6fr;
            grid-template-areas: "logo address receipt";
          }
        `}
      </style>
    </>
  );
}
