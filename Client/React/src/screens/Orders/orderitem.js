import React from "react";
import Item from "./ItemRow";
import { formatNumber } from "../../helpers/utils";

const orderItem = (props) => {
  return (
    <div
      style={{
        padding: "10px",
        margin: "35px 0",
        border: "0.5px solid black",
        borderRadius: "20px",
      }}
    >
      <div className="p-3 text-center">
        <p>
          Transaction Id :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {props.orders._id}
          </span>
        </p>
        <p>
          No.of Books bought :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {props.orders.itemCount}
          </span>
        </p>
        <p>
          Amount Paid :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {formatNumber(props.orders.total)}
          </span>
        </p>
        <p>
          Order Date&Time :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {props.orders.date}
          </span>
        </p>
      </div>
      <table className="table" style={{ marginBottom: "0" }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name of book</th>
            <th scope="col">Quantity bought</th>
            <th scope="col">Price of one</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.cartItems.map((item) => (
            <Item key={item._id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default orderItem;
