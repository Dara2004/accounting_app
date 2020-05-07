import { useContext } from "react";
import { LanguageContext } from "../_app";
import { DatePicker, Form } from "antd";
import PurpleButton from "../../components/Button";

export default function DailyEstimate(props) {
    const strings = useContext(LanguageContext);

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="side" >
                        <h2 id="customers">{strings.banking}</h2>
                        <h3>{strings.statements}</h3>
                        <h3>{strings.arAgingSummary}</h3>

                        <h2>{strings.customerReport}</h2>
                        <h3>{strings.statements}</h3>
                        <h3>{strings.arAgingSummary}</h3>

                        <h2>{strings.vendors}</h2>
                        <h3>{strings.statements}</h3>
                        <h3>{strings.arAgingSummary}</h3>

                        <h2>{strings.otherReport}</h2>
                        <h3>{strings.statements}</h3>
                        <h3>{strings.arAgingSummary}</h3>
                    </div>
                    <div className="main">
                        <div className="date-range">
                            <div className="date-start">
                                <Form.Item name="date-picker1" label="Date Start: ">
                                    <DatePicker />
                                </Form.Item>
                            </div>
                            <div className="date-end">
                                <Form.Item name="date-picker2" label="Date End: ">
                                    <DatePicker />
                                </Form.Item>
                            </div>
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
                        <h2>Customer Transaction Detail Report</h2>
                        <div className="report-content">
                            <div className="date">DATE</div>
                            <div className="customer">CUSTOMER</div>
                            <div className="invoice">INVOICE #</div>
                            <div className="debit">DEBIT</div>
                            <div className="credit">CREDIT</div>
                        </div>
                        <hr className="hr"></hr>
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
            #customers {
              margin-top: 64px;
            }
            .side h2 {
              margin-top: 20px;
              margin-left: 20px;
              color: white;
              font-weight: bold;
            }
            .side h3 {
              margin-left: 50px;
              color: white;
              font-weight: bold;
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
              display: grid;
              grid-gap: 20px;
              grid-template-columns: 2fr 2fr 1.5fr 1.5fr;
              grid-template-areas: "date-start date-end update export";
              
            }
            .report-content{
              text-align: center;
              display: grid;
              grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
              grid-template-areas: "date customer invoice debit credit";
            }
            .hr{
              margin-right: 20px; 
            }
          `}
            </style>
        </>);
}