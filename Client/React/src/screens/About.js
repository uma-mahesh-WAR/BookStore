import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout
      title="About"
      description="This is the About page"
      link="http://localhost:3000"
      methd="Logout"
    >
      <div className="text-center">
        <h1>About</h1>
        <p>
          This project was built by github.com/uma-mahesh-WAR.
        </p>
      </div>
    </Layout>
  );
};

export default About;
