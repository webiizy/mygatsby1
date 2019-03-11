import React from "react";
import Layout from "../../components/layout";
import { Link } from "gatsby";

export default function testing() {
  return (
    <Layout>
      <h1>Hi, i'm testing</h1>
      <Link to="/">Go to home page</Link>
    </Layout>
  );
}
