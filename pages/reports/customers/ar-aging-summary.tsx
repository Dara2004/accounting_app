import { Typography, Grid } from "@material-ui/core";
import { NextPage } from "next";
import React, { useState, useContext } from "react";
import { Form, Input, DatePicker } from "antd";
import PurpleButton from "../../../components/Button";
import { DropDownMenu, DropDownMenuItem } from "../../../components/DropDownMenu";
import Strings from "../../../international/strings";
import { LanguageContext } from "../../_app";
import { useRouter } from "next/router";
import ReportLayout from "../../../components/Report/ReportLayout";

class Color {
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

// Report Page
export default function Report() {
  // const [color, setColor]: [Color, Function] = useState(new Color("red"));
  return (
    <ReportLayout>
      <h2>Customer Transaction Detail Report</h2>
      <div className="report-content">
        <div className="date">DATE</div>
        <div className="customer">CUSTOMER</div>
        <div className="invoice">INVOICE #</div>
        <div className="debit">DEBIT</div>
        <div className="credit">CREDIT</div>
      </div>
      <hr className="hr"></hr>
      <style jsx>{`
            h2 {
              margin-top: 30px;
              text-align: center;
              margin-bottom: 30px;
            }
            .report-content{
              text-align: center;
              display: grid;
              grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
              grid-template-areas: "date customer invoice debit credit";
            }
            .hr{
              margin-right: 20px; 
            }`
      }</style>
    </ReportLayout>
  );
};