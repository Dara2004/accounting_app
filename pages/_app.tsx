import "antd/dist/antd.css";
import "../styles.css";
import Container from "@material-ui/core/Container";

// import { ApolloProvider } from "@apollo/react-hooks";
// import { withApollo } from "@app/lib";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { notification } from "antd";
// import { ApolloClient } from "apollo-client";
import App from "next/app";
import Router from "next/router";
// import NProgress from "nprogress";
import * as React from "react";
import English from "../international/english";
import Vietnamese from "../international/vietnamese";

import NavBar from "../components/NavBar";
import Strings from "../international/strings";
import { useState } from "react";
import Head from "next/head";
import withData from "../apolloClient";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";

export const LanguageContext = React.createContext(English);

interface IMyAppState {
  language: Strings;
}

class MyApp extends App<{ apollo: any }, {}, IMyAppState> {
  constructor(props) {
    super(props);
    this.state = {
      language: Vietnamese,
    };
    this.setLanguage = this.setLanguage.bind(this);
  }
  setLanguage(language: Strings) {
    this.setState({
      language: language,
    });
  }

  render() {
    const { Component, pageProps, apollo } = this.props;

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#5DCBAF",
          // main: "#19f9d8",
        },
        secondary: {
          main: "rgba(0, 0, 0, 0.8)",
        },
      },
      typography: {
        fontFamily: "Source Sans Pro",
      },
      // Overrides
      overrides: {
        MuiButton: {
          text: {
            background: "#5D67E9",
            color: "white",
          },
        },
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={this.state.language}>
          <Head>
            <title>Accounting App</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
              rel="stylesheet"
            ></link>
            <link
              href="https://fonts.googleapis.com/css2?family=Source%20Sans%20Pro&display=swap"
              rel="stylesheet"
            ></link>
          </Head>
          <ApolloProvider client={apollo}>
            <NavBar setLanguage={this.setLanguage} username="Nguyet"></NavBar>
            <Container maxWidth="lg">
              <Component {...pageProps} />
            </Container>
          </ApolloProvider>
        </LanguageContext.Provider>
      </ThemeProvider>
    );
  }
}

export default withData(MyApp);
