import React from 'react'
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby";
import styles from "./Post.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      heroImage {
          file {
              url
          }
      }
    }
  }
`;

const Post = () => {
    return (
        <div>
            hello baby
        </div>
    )
}

export default Post
