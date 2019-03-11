import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

//import Section from "../components/section/section";
import Header from "./header";
//import Info from "../components/info";
//import { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   *{
//     margin:0;
//     padding:0;
//   }

// `;
//import "./layout.css";
//import "../sass/layout.scss";
import "./bootstrap.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <GlobalStyle /> */}

        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          {/* <Section /> */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
