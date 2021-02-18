import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/Layout"
import ReactMarkdown from "react-markdown"
import { DiscussionEmbed } from "disqus-react"
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
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: props.data.contentfulArticle.title, title: props.data.contentfulArticle.title },
  }
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
          <img src={props.data.contentfulArticle.image.file.url} alt="sample" />
          <div className={styles.body}>
            <ReactMarkdown
              source={props.data.contentfulArticle.body.body}
              allowDangerousHtml={true}
            />
          </div>
        </div>
      </div>
      <div className={styles.comments}>
        <DiscussionEmbed {...disqusConfig} />
      </div>
    </Layout>
  )
}

export default Post
