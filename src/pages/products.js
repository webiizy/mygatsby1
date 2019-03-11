import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
export default function products({ data }) {
  //console.log(data.products.edges[0].node.image.fixed);
  const images = data.products.edges;
  return (
    <Layout>
      <Link to="/">Go back to home page</Link>
      <h1>our products</h1>
      {images.map(({ prod }) => {
        return (
          <div key={prod.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Img fixed={prod.image.fixed} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {prod.title}{" "}
              <span style={{ color: "grey", marginLeft: "2rem" }}>
                ${prod.price}
              </span>
            </h3>
            <p>{prod.description.description}</p>
            <Link to={`/products/${prod.title}`}>
              <h2>Details</h2>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        prod: node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;
