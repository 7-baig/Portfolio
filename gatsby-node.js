const path = require("path");
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "ContentfulArticle") {
    createNodeField({
      node,
      name: "slug",
      value: node.slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("./src/templates/Post/Post.jsx");

  const res = await graphql(`
    query {
        allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulArticle.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/my_portfolio/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};