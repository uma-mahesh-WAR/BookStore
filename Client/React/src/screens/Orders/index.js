import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import OrderItem from "./orderitem";

class Orders extends React.Component {
  state = {
    orders: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8081/orders", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({ orders: res.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <Layout>
        <div>
          <div className="text-center">
            <h1>Orders</h1>
          </div>
          <div>
            {this.state.orders.map((order) => (
              <OrderItem key={order._id} orders={order} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Orders;
