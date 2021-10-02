import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatNumber } from "../../helpers/utils";

class Order extends React.Component {
  state = {
    order: {},
  };
  async componentDidMount() {
    const a = await axios.get("http://localhost:8081/orders/paysuccess", {
      withCredentials: true,
    });
    this.setState({ order: a.data });
  }
  render() {
    return (
      <div className="p-3 text-center">
        <h3>Order Details</h3>
        <p>
          Transaction Id :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {this.state.order._id}
          </span>
        </p>
        <p>
          No.of Books bought :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {this.state.order.itemCount}
          </span>
        </p>
        <p>
          Amount Paid :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {formatNumber(this.state.order.total)}
          </span>
        </p>
        <p>
          Order Date&Time :{" "}
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            {this.state.order.date}
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            Your order will be delivered within 2 Days.
          </span>
        </p>
        <p>
          <span style={{ fontWeight: "999", fontSize: "20px" }}>
            ThankYou for shopping with us.
          </span>
        </p>
      </div>
    );
  }
}

const Success = (props) => {
  const { cartItems, checkout } = useContext(CartContext);
  return (
    <Layout>
      <div
        style={{ minHeight: "86vh", display: "flex", justifyContent: "center" }}
      >
        <div style={{ alignSelf: "center" }}>
          {checkout && cartItems.length === 0 && (
            <div>
              <div className="p-3 text-center text-success">
                <p>Payment successful.</p>
              </div>
              <Order />
              <div className="p-3 text-center text-success">
                <Link to="/store" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Success;
