import React from "react"
import BlogPost from "../components/Blog/Blog"
import Layout from "../components/Layout/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../styles/blog.module.scss"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlog {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "D MMMM YYYY")
              heroImage {
                file {
                  url
                }
                description
              }
              description
              body {
                raw
              }
            }
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <Layout>
      <div className={styles.container}>
        {data.allContentfulBlog.edges.map(post => (
          <BlogPost slug={post.node.slug} />
        ))}
        <hr className={styles.sep} />
      </div>
    </Layout>
  )
}

export default Blog
