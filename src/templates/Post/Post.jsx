import React from "react"
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout/Layout"
import ReactMarkdown from "react-markdown";
import styles from "./Post.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "D MMMM YYYY")
      heroImage {
        file {
          url
        }
      }
      body {
        raw
      }
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>{props.data.contentfulBlog.title}</h1>
          <hr className={styles.separator} />
          <div className={styles.details}>
            <p>By {props.data.contentfulBlog.author}</p>
            <span>|</span>
            <p>{props.data.contentfulBlog.publishedDate}</p>
          </div>
          <img
            src={props.data.contentfulBlog.heroImage.file.url}
            alt="sample"
          />
          {/* <p className={styles.description}> */}
            <ReactMarkdown
              source={props.data.contentfulBlog.body.raw}
              allowDangerousHtml={true}
            />
            <p>{JSON.stringify(props.data.contentfulBlog.body.raw)}</p>
          {/* </p> */}
          <button>Read More</button>
        </div>
      </div>
    </Layout>
  )
}

export default Post
