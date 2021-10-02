import React from "react";
import Layout from "../../../components/Layout";
import DeleteBook from "./DeleteBook";

const Admin = () => {
  return (
    <Layout link="http://localhost:3000" methd="Logout">
      <div>
        <div className="text-center">
          <h1>Delete Book</h1>
        </div>
        <DeleteBook />
      </div>
    </Layout>
  );
};

export default Admin;
