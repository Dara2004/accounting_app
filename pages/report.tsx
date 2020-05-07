import { Typography, Grid } from "@material-ui/core";
import { NextPage } from "next";
import React, { useState, useContext } from "react";
import { Form, Input, DatePicker } from "antd";
import PurpleButton from "../components/Button";
import { DropDownMenu, DropDownMenuItem } from "../components/DropDownMenu";
import Strings from "../international/strings";
import { LanguageContext } from "./_app";
import { useRouter } from "next/router";
import ReportLayout from "../components/Report/ReportLayout";

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
      <h1> Summary (todo) </h1>
    </ReportLayout>
  );
};