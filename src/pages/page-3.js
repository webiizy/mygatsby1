import React from "react";
import Layout from "../components/layout";
import { FaApple } from "react-icons/fa";

const SecondPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-6">
          hello world
          <FaApple className="icon" />
        </div>
        <div className="col-6">hello world</div>
      </div>
    </div>
  </Layout>
);

export default SecondPage;
