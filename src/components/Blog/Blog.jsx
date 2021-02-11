import React from "react"
import { Link } from "gatsby"
import styles from "./Blog.module.scss"

const Blog = ({ slug, title, description, heroImage, imgDescription, date, author }) => {
  return (
    <div className={styles.container}>
      <Link to={`/Portfolio/blog/${slug}`}>
        <h1>{title}</h1>
      </Link>
      <hr className={styles.separator} />
      <div className={styles.details}>
        <p>By {author}</p>
        <span>|</span>
        <p>{date}</p>
      </div>
      <img src={heroImage} alt={imgDescription} />
      <p className={styles.description}>{description}</p>
      <Link to={`/Portfolio/blog/${slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  )
}

export default Blog
