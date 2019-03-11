import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

import Dude from "../components/dude";

export default function images({ data }) {
  const images = data.allFile.edges;
  return (
    <Layout>
      <h1>Images Layout</h1>

      {images.map((item, index) => {
        return <h3 key={index}>{item.node.relativePath}</h3>;
      })}

      <Dude />
    </Layout>
  );
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`;
