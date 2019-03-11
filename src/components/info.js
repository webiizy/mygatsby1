import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function info() {
  const getdata = graphql`
    {
      info: site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;
  return (
    <StaticQuery
      query={getdata}
      render={data => {
        const siteData = data.info.siteMetadata;
        const { title, description, author } = siteData;
        console.log(siteData);
        return (
          <div>
            <h1>site:{title}</h1>
            <p>description:{description}</p>
            <h1>author:{author}</h1>
          </div>
        );
      }}
    />
  );
}
