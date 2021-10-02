import React from "react";
import { formatNumber } from "../../helpers/utils";

const itemRow = (props) => {
  return (
    <tr>
      <th>{props.item.title}</th>
      <td>{props.item.quantity}</td>
      <td>{formatNumber(props.item.price)}</td>
    </tr>
  );
};

export default itemRow;
