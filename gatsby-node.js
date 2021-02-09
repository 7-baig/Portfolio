const path = require("path");
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "ContentfulBlog") {
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
        allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  res.data.allContentfulBlog.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};