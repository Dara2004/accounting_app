import { useState, useEffect } from "react";
import AddItemBtn from "../AddItemBtn";
import { format } from "url";
import AddItemForm from "./AddItemForm";
import { Typography } from "@material-ui/core";
import InvoiceTableRow from "./InvoiceTableRow";

export interface InvoiceItem {
  itemId: string;
  description: string;
  quantity: number;
  price: number;
  taxCode: string;
  taxAmount: number; //eg: 0.05 for 5%
  amount: number;
}

interface BaseItem {
  itemId: string;
  description: string;
  price: number;
}

const InvoiceTable = () => {
  const [invoiceItems, setInvoiceItems]: [InvoiceItem[], Function] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [allItems, setAllItems]: [{ [key: string]: BaseItem }, Function] = useState(
    {}
  );
  const [totalAmount, setTotalAmount]: [number, Function] = useState(0);
  const [taxAmount, setTaxAmount]: [number, Function] = useState(0);
  const [subtotalAmount, setSubtotalAmount]: [number, Function] = useState(0);

  const fetchAllItems = () => {
    // make GraphQL query, and .then()
    setTimeout(() => {
      const sampleAllItems = {};
      sampleAllItems["1"] = {
        itemId: "1",
        description: "Fresh ginger",
        price: 20000,
      };
      sampleAllItems["gin2"] = {
        itemId: "gin2",
        description: "Fresh ginger",
        price: 25000,
      };
      sampleAllItems["gin3"] = {
        itemId: "gin3",
        description: "Fresh ginger",
        price: 32000,
      };
      setAllItems(sampleAllItems);
      // TODO: return function that cancels this request if it's not done yet
    }, 500);
  };

  useEffect(fetchAllItems, []);

  const getInvoiceItem = (itemId: string): InvoiceItem => {
    const item: BaseItem = allItems[itemId];
    return {
      itemId: item.itemId,
      description: item.description,
      price: item.price,
      quantity: 1,
      taxCode: "",
      taxAmount: 0,
      amount: item.price
    }
  }

  const calculateTotal = (items) => {
    let tempTotal: number = 0;
    let tempTax: number = 0;
    let tempSubtotal: number = 0;
    for (let i = 0; i < items.length; i++) {
      tempTotal += items[i].amount;
      tempTax += items[i].tax;
      tempSubtotal += items[i].amount;
    }
    setTotalAmount(tempTotal);
    if (!isNaN(tempTax)) {
      setTaxAmount(tempTax);
    }
    setSubtotalAmount(tempSubtotal);
  }

  const addItem = (itemId: string) => {
    let newItems;
    setInvoiceItems((prevItems) => {
      newItems = [...prevItems, getInvoiceItem(itemId)];
      newItems.forEach(item => console.table(Object.keys(item).map(key => [key, typeof item[key]])));
      calculateTotal(newItems);
      return newItems;
    });
    setFormOpen(false);
  };

  const showInvoiceItems = () => {
    return invoiceItems.map((item, index) => (
      <div className="wrapper" key={index} style={{ marginTop: 10, marginBottom: 10 }}>
        <InvoiceTableRow item={item} handleChange={(attr, value) => {
          console.log("handleChange...")
          setInvoiceItems((prevItems) => {
            const newItems = prevItems.map((it, idx) => {
              if (idx != index) {
                return it;
              } else {
                it[attr] = value;
                if (attr === "price" || attr === "quantity") {
                  it.amount = it.price * it.quantity;
                }
                return it;
              }
            });
            calculateTotal(newItems);
            return newItems;
          });
        }} />
      </div >
    ));
  };

  if (Object.values(allItems).length === 0) {
    return <h1>Loading...</h1>;
  } else
    return (
      <>
        <div className="wrapper">
          <h4 className="item">ITEM</h4>
          <h4 className="price">PRICE</h4>
          <h4 className="quantity">QUANTITY</h4>
          <h4 className="tax">TAX</h4>
          <h4 className="total">TOTAL</h4>
        </div>
        <hr></hr>
        {showInvoiceItems()}

        {isFormOpen ? (
          <AddItemForm addItem={addItem} items={allItems} />
        ) : (
            <AddItemBtn text="Add item" onClick={() => setFormOpen(true)} />
          )}

        <hr></hr>
        <div className="wrapper">
          <div className="item"></div>
          <div className="price"></div>
          <div className="quantity"></div>
          <h3 className="tax">Subtotal: </h3>
          <div className="total">{subtotalAmount}</div>
        </div>
        <div className="wrapper">
          <div className="item"></div>
          <div className="price"></div>
          <div className="quantity"></div>
          <h3 className="tax">Tax: </h3>
          <div className="total">{taxAmount}</div>
        </div>
        <div className="wrapper">
          <div className="item"></div>
          <div className="price"></div>
          <div className="quantity"></div>
          <h3 className="tax" style={{ fontWeight: "bolder" }}>Total: </h3>
          <h3 className="total" style={{ fontWeight: "bolder" }}>{totalAmount}</h3>
        </div>

        <style jsx>
          {`
            .wrapper {
              display: grid;
              grid-template-columns: 9fr 3fr 3fr 3fr 3fr;
              grid-template-areas: "item price quantity tax total";
            }
          `}
        </style>
      </>
    );
};

export default InvoiceTable;
