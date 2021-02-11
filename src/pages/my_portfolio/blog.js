import React from "react"
import BlogPost from "../../components/Blog/Blog"
import Layout from "../../components/Layout/Layout"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../styles/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulArticle {
          edges {
            node {
              title
              author
              slug
              publishedDate(formatString: "D MMMM YYYY")
              image {
                file {
                  url
                }
                description
              }
              description
              body {
                body
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout secondary={true}>
      <div className={styles.container}>
        {data.allContentfulArticle.edges.map(post => (
          <BlogPost
            slug={post.node.slug}
            title={post.node.title}
            author={post.node.author}
            description={post.node.description}
            heroImage={post.node.image.file.url}
            imgDescription={post.node.image.description}
            date={post.node.publishedDate}
          />
        ))}
        <hr className={styles.sep} />
      </div>
    </Layout>
  )
}

export default Blog
