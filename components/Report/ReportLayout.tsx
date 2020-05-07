import { useContext } from "react";
import { LanguageContext } from "../../pages/_app";
import { DatePicker } from "antd";
import PurpleButton from "../Button";
import Row from "../Row";
import { Typography, Input } from "@material-ui/core";
import { useRouter } from "next/router";

const ReportLayout = ({ children }) => {
    const strings = useContext(LanguageContext);
    const router = useRouter();
    const currRoute = router.route;

    return <><div className="container">
        <div className="wrapper">
            <div className="side" >
                <h2 id="banking">{strings.banking}</h2>
                <h3>{strings.statements}</h3>

                <h2>{strings.customerReport}</h2>
                <div className={currRoute == "/reports/customers/statements" ?
                    "highlight" : ''}>
                    <h3 onClick={() => router.push("/reports/customers/statements")}>{strings.statements}</h3>
                </div>
                {/* <div className={currRoute == "/reports/customers/ar-aging-summary" ?
                    "highlight" : ''}>
                    <h3 onClick={() => router.push("/reports/customers/ar-aging-summary")}>{strings.arAgingSummary}</h3>
                </div>

                <h2>{strings.vendors}</h2>
                <h3>{strings.statements}</h3>
                <h3>{strings.arAgingSummary}</h3> */}

                <h2>{strings.otherReport}</h2>
                <h3>{strings.shippingReport}</h3>
                <h3>{strings.dailyOrders}</h3>
            </div>
            <div className="main">
                <div className="date-range">
                    <Row className="date-start" alignItems="center">
                        <Typography variant="body1" style={{ display: "inline" }}> Date Start &nbsp; </Typography>
                        <DatePicker />
                    </Row>
                    <Row className="date-end" alignItems="center">
                        <Typography variant="body1" style={{ display: "inline" }}> Date End &nbsp; </Typography>
                        <DatePicker />
                    </Row>
                    <Row className="dealer" alignItems="center">
                        <Typography variant="body1" style={{ display: "inline" }}> Dealer &nbsp; </Typography>
                        <Input />
                    </Row>
                    <div className="update">
                        <PurpleButton type="primary"
                            htmlType="submit"
                            name="&nbsp; Update &nbsp;"
                            noTop>
                        </PurpleButton>
                    </div>
                    <div className="export">
                        <PurpleButton type="primary"
                            htmlType="submit"
                            name="&nbsp; Export &nbsp;"
                            noTop>
                        </PurpleButton>
                    </div>
                </div>
                {children}

            </div>
        </div>
    </div>
        <style jsx>
            {`
            .container {
              position: absolute;
              top: 64px;
              left: 0px;
            }
            .wrapper {
              display: grid;
              width: 98vw;
              grid-template-columns: 2fr 8fr;
              grid-template-areas: "side main";
            }
            .side {
              height: 100vh;
              background-color: #5DCBAF;
            }
            #banking {
              margin-top: 64px;
            }
            .side h2 {
              margin-top: 20px;
              margin-left: 20px;
              color: white;
              font-weight: bold;
              cursor: pointer;
            }
            .side h3 {
              margin-left: 50px;
              color: white;
              font-weight: bold;
               cursor: pointer;
            }
            .main{
              margin-top: 30px;
              margin-left: 20px;
            }
            .main h2 {
              margin-top: 30px;
              text-align: center;
              margin-bottom: 30px;
            }
            .date-range {
                margin-left: 20px;
                width: 70vw;
              display: grid;
              grid-template-columns: 1.5fr 1.5fr 1.5fr 2fr 2fr;
              grid-template-areas: "date-start date-end dealer update export";
            }
            .highlight {
                background-color: #34A186;
            }
            .highlight h3{
                color: #ABFBE7;
            }
          `}
        </style></>
};

export default ReportLayout;