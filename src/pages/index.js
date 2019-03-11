import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "styled-components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/">
      <h1>Porduct Page</h1>
    </Link>
    <h1 style={{ color: "red" }}>Hi people M</h1>
    <p>1 Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>I'm from styled</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/images/">Go to Image page</Link>
  </Layout>
);

const Button = styled.button`
  color: red;
  background: green;
  font-size: 1.5rem;
`;

export default IndexPage;
