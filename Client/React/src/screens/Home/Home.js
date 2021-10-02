import React from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import styles from "../Store/ProductsGrid.module.scss";
import ProductItem from "../Store/ProductItem";

class Home extends React.Component {
  state = {
    books: {
      data: [],
    },
  };
  async componentDidMount() {
    const a = await axios.get("http://localhost:8081/booksnewreleases", {
      withCredentials: true,
    });
    this.setState({ books: a });
  }
  render() {
    return (
      <Layout link="http://localhost:3000/login" methd="Login" page="home">
        <div>
          <div
            style={{
              minHeight: "30vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1 style={{ textAlign: "center", alignSelf: "center" }}>
              Welcome To{" "}
              <span style={{ border: "5px solid black" }}>
                Book
                <span style={{ backgroundColor: "black", color: "white" }}>
                  Store
                </span>
              </span>
            </h1>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>New Releases</h1>
          </div>
          <div className={styles.p__container}>
            <div className={styles.p__grid}>
              {this.state.books.data.map((product) => (
                <ProductItem key={product._id} product={product} page="home" />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;
