import React from "react"
import sample from "../../images/blogs/blog.jpg"
import Quote from "../Quote/Quote"
import write from "../../images/icons/write.png"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./Blogs.module.scss"

const Blogs = () => {
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
    <Fade bottom>
      <div className={styles.container} id="blogs">
        <div className={styles.header}>
          <h1>Blogs</h1>
          <img src={write} alt="write" />
        </div>
        <Quote
          quote="A writer is working when he’s staring out of the window."
          author="Burton Rascoe"
        />
        <div className={styles.blogsContainer}>
          {data.allContentfulArticle.edges.map(post => (
            <div className={styles.blog}>
              <img src={post.node.image.file.url} alt={post.node.image.description} />
              <Link to={`/blog/${post.node.slug}`}>
                <h3>{post.node.title}</h3>
              </Link>
              <small>{post.node.publishedDate}</small>
              <hr />
              <p>{post.node.description}</p>
            </div>
          ))}
        </div>
        <Link to="/blog">
          <button className={styles.viewAll}>View all blogs</button>
        </Link>
      </div>
    </Fade>
  )
}

export default Blogs
