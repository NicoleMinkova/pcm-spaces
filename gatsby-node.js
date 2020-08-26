const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then((result) => {
      result.data.allContentfulBlogPost.edges.map(({ node: post }) => {
        createPage({
          path: `blog/${post.slug}`,
          component: path.resolve(`./src/templates/Post.tsx`),
          context: {
            slug: post.slug,
          },
        });
      });
      resolve();
    });
  });
};
