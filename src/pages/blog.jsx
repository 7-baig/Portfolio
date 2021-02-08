import React from "react"
import Blog from "../components/Blog/Blog"
import Layout from '../components/Layout/Layout'
import styles from "../styles/blog.module.scss"

const blog = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Blog />
        <hr className={styles.sep} />
        <Blog />
        <hr className={styles.sep} />
        <Blog />
      </div>
    </Layout>
  )
}

export default blog
