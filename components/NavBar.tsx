import { DropDownMenu, DropDownMenuItem } from "./DropDownMenu";
import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";

import English from "../international/english";
import Strings from "../international/strings";
import Vietnamese from "../international/vietnamese";
import vietnameseFlag from "../public/vietnamese_flag.svg";
import englishFlag from "../public/english_flag.svg";
import classes from "*.module.css";
import { LanguageContext } from "../pages/_app";

function salesMenuItems(strings: Strings): DropDownMenuItem[] {
  return [
    {
      text: strings.customers,
      href: "/customers",
    },
    {
      text: strings.dealers,
      href: "/dealers",
    },
    {
      text: strings.estimates,
      href: "/estimates",
    },
    {
      text: strings.invoices,
      href: "/invoices",
    },
    {
      text: strings.productsAndServices,
      href: "/products-and-services",
    },
    {
      text: strings.shippingRegions,
      href: "/shipping-region",
    },
  ];
}

function purchaseMenuItems(strings): DropDownMenuItem[] {
  return [];
}

function accountingMenuItems(strings): DropDownMenuItem[] {
  return [];
}

function flag(language: Strings) {
  if (language == English) {
    return englishFlag;
  } else if (language == Vietnamese) {
    return vietnameseFlag;
  } else {
    console.log("Flag not set for this language");
    return englishFlag;
  }
}

const NavBar = ({ setLanguage, username }) => {
  const [isReportActive, setReportActive] = useState(false);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const strings = useContext(LanguageContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="lg">
        <Toolbar>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div className="menu">
                <DropDownMenu
                  reportActive={setReportActive}
                  title={strings.sales}
                  menuItems={salesMenuItems(strings)}
                ></DropDownMenu>
                <DropDownMenu
                  reportActive={setReportActive}
                  title={strings.purchase}
                  menuItems={purchaseMenuItems(strings)}
                ></DropDownMenu>
                <DropDownMenu
                  reportActive={setReportActive}
                  title={strings.accounting}
                  menuItems={accountingMenuItems(strings)}
                ></DropDownMenu>

                <ButtonBase
                  className={isReportActive ? "btnBaseClicked" : ""}
                  onClick={() => {
                    router.push("/report");
                    setReportActive(true);
                  }}
                >
                  <Typography
                    className={
                      isReportActive ? "menuBtnClicked" : "menuBtnNotClicked"
                    }
                  >
                    {strings.report}
                  </Typography>
                </ButtonBase>
              </div>
            </Grid>
            <Grid container item xs={3} justify="flex-end" alignItems="center">
              <Grid item>
                <Typography variant="body1">{strings.hello},&nbsp;</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ fontStyle: "italic" }}>
                  {username}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <img src={flag(strings)} style={{ width: 40, height: 40 }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {" "}
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setLanguage(English);
                    }}
                  >
                    <>
                      <img
                        src={englishFlag}
                        style={{
                          width: 40,
                          height: 30,
                          marginRight: 15,
                        }}
                      />
                      <Typography variant="body1">English</Typography>
                      <div style={{ width: 30 }}></div>
                    </>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setLanguage(Vietnamese);
                    }}
                  >
                    <>
                      <img
                        src={vietnameseFlag}
                        style={{
                          width: 40,
                          height: 30,
                          marginRight: 15,
                        }}
                      />
                      <Typography variant="body2">Tiếng Việt</Typography>
                    </>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
