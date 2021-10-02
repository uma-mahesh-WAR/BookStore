import React from "react";
import Layout from "../../components/Layout";

import ProductsGrid from "./ProductsGrid";

const Store = () => {
  return (
    <Layout link="http://localhost:3000" methd="Logout">
      <div>
        <div className="text-center">
          <h1>Store</h1>
        </div>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
