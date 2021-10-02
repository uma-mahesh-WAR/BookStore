import React from "react";
import Layout from "../../components/Layout";

function Admin() {
  return (
    <Layout link="http://localhost:3000/login" methd="Login" page="home">
      <div
        style={{ minHeight: "86vh", display: "flex", justifyContent: "center" }}
      >
        <div style={{ alignSelf: "center" }}>
          <h1 style={{ textAlign: "center" }}>Welcome Admin</h1>
          <p style={{ textAlign: "center" }}>
            Select what you want to do from Header.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
