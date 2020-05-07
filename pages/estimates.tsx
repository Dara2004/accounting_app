import { NextPage } from "next";
import React, { useContext } from "react";

// import EstimatesTable from "../components/EstimatesTable";
import { Grid } from "@material-ui/core";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { LanguageContext } from "./_app";

const Estimate: NextPage = () => {
  const router = useRouter();
  const strings = useContext(LanguageContext);
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h1>{strings.estimates}</h1>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button
              onClick={() => {
                router.push("/new-estimate");
              }}
              name={strings.createEstimate}
            ></Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Estimate;
