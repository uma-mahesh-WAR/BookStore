import React from "react";
import Layout from "../../../components/Layout";
import AddCategory from "./AddCategory";

const Admin = () => {
  return (
    <Layout link="http://localhost:3000" methd="Logout">
      <div>
        <div className="text-center">
          <h1>ADD CATEGORY</h1>
        </div>
        <AddCategory />
      </div>
    </Layout>
  );
};

export default Admin;
