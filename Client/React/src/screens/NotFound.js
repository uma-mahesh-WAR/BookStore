import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const center = {
    textAlign: "center",
  };

  return (
    <Layout link="http://localhost:3000" methd="Logout">
      <div style={center}>
        <h1 style={{ fontSize: "80px", color: "red" }}>404</h1>
        <p>Page Not Found.</p>
      </div>
    </Layout>
  );
};

export default NotFound;
