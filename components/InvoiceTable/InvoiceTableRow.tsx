import { Typography, Box } from "@material-ui/core";
import { InvoiceItem } from "./InvoiceTable";
import { Input, InputNumber } from "antd";

const InvoiceTableRow = ({ item, handleChange }: { item: InvoiceItem, handleChange: Function }) => {

    return (
        <>
            <div className="wrapper">
                <div className="id">
                    <Box>{item.itemId}</Box>
                </div>
                <div className="desc" style={{ marginRight: 30 }}>
                    <Input value={item.description} onChange={(e) => { handleChange("description", e.target.value) }}></Input>
                </div>
                <div className="price">
                    <InputNumber value={item.price} onChange={value => { handleChange("price", value) }}></InputNumber>
                </div>
                <div className="quantity">
                    <InputNumber value={item.quantity} onChange={value => { handleChange("quantity", value) }}></InputNumber>
                </div>
                <div className="taxcode">
                    <Input value={item.taxCode} onChange={e => { handleChange("taxCode", e.target.value) }}></Input>
                </div>
                <div className="taxAmount">
                    <Box></Box>
                </div>
                <div className="total">
                    <Box className="total" fontWeight="bold">{isNaN(item.amount) ? "---" : Math.round(item.amount * 100) / 100}</Box>
                </div>
            </div>
            <style jsx>
                {`
            .wrapper {
              display: grid;
              grid-template-columns: 2fr 7fr 3fr 3fr 1fr 2fr 3fr;
              grid-template-areas: "id desc price quantity taxcode taxamount total";
            }
          `}
            </style>
        </>
    )
};
export default InvoiceTableRow;
