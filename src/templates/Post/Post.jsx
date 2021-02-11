import React from "react"
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout/Layout"
import ReactMarkdown from "react-markdown";
import styles from "./Post.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      author
      publishedDate(formatString: "D MMMM YYYY")
      image {
        file {
          url
        }
      }
      body {
        body
      }
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>{props.data.contentfulArticle.title}</h1>
          <hr className={styles.separator} />
          <div className={styles.details}>
            <p>By {props.data.contentfulArticle.author}</p>
            <span>|</span>
            <p>{props.data.contentfulArticle.publishedDate}</p>
          </div>
          <img
            src={props.data.contentfulArticle.image.file.url}
            alt="sample"
          />
            <ReactMarkdown
              source={props.data.contentfulArticle.body.body}
              allowDangerousHtml={true}
            />
          {/* </p> */}
          <button>Read More</button>
        </div>
      </div>
    </Layout>
  )
}

export default Post
