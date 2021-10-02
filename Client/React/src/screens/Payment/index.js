import React, { useContext } from "react";
import Layout from "../../components/Layout";
import "./index.scss";
import Address from "./Pay";
import { CartContext } from "../../contexts/CartContext";
import { withRouter } from "react-router-dom";

const Payment = (props) => {
  const { handleCheckout } = useContext(CartContext);
  const handleClick = () => {
    if (document.getElementById("my-form").checkValidity()) {
      let a = false;
      a = handleCheckout();
      if (a) {
        props.history.push("/success");
      }
    }
  };
  return (
    <Layout>
      <Address />
      <div className="form-group" style={{ width: "100%" }}>
        <button
          form="my-form"
          style={{ margin: "10px auto" }}
          className="btn btn-secondary"
          onClick={handleClick}
        >
          Continue
        </button>
      </div>
    </Layout>
  );
};

export default withRouter(Payment);
