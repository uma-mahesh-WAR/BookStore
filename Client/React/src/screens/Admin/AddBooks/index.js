import React from "react";
import Layout from "../../../components/Layout";
import AddBook from "./AddBook";

const Admin = () => {
  return (
    <Layout link="http://localhost:3000" methd="Logout">
      <div>
        <div className="text-center">
          <h1>ADD/UPDATE BOOK</h1>
        </div>
        <AddBook />
      </div>
    </Layout>
  );
};

export default Admin;
