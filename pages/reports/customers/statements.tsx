import ReportLayout from "../../../components/Report/ReportLayout";
import { LanguageContext } from "../../_app";
import { useContext } from "react";

export default function Statements() {
    const strings = useContext(LanguageContext)
    return (
        <ReportLayout>

            <h2>{strings.statements}</h2>
            <div className="report-content">
                <div className="date">DATE</div>
                <div className="customer">CUSTOMER</div>
                <div className="invoice">INVOICE #</div>
                <div className="amount">AMOUNT</div>
                <div className="paid">PAID</div>
                <div className="unpaid">BALANCE</div>
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
              grid-template-columns: 1fr 3fr 2fr 2fr 2fr 2fr;
              grid-template-areas: "date customer invoice amount paid unpaid";
            }
            .hr{
              margin-right: 20px; 
            }`
            }</style>
        </ReportLayout>
    );
}