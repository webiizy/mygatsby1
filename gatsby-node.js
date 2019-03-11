const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      products: allContentfulProduct {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
    .then(res =>
      res.data.products.edges.forEach(({ node }) => {
        //console.log(node);
        createPage({
          path: `products/${node.title}`,
          component: path.resolve("./src/templates/product-template.js"),
          context: {
            id: node.id,
            title: node.title
          }
        });
      })
    )
    .catch(error => console.log(error));
};
