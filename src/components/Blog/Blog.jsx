import React from "react"
import { Link } from "gatsby"
import styles from "./Blog.module.scss"

const Blog = ({ slug, title, description, heroImage, imgDescription, date, author }) => {
  return (
    <div className={styles.container} key={slug}>
      <Link to={`/blog/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <hr className={styles.separator} />
      <div className={styles.details}>
        <p>By {author}</p>
        <span>|</span>
        <p>{date}</p>
      </div>
      <img src={heroImage} alt={imgDescription} loading="lazy"/>
      <p className={styles.description}>{description}</p>
      <Link to={`/blog/${slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  )
}

export default Blog
