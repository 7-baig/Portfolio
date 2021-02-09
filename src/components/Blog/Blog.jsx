import React from "react"
import sample from "../../images/projects/restaurant.jpg"
import { Link } from "gatsby"
import styles from "./Blog.module.scss"

const Blog = ({ slug }) => {
  return (
    <div className={styles.container}>
      <Link to={`/blog/${slug}`}>
        <h1>UI design books you should read in 2021</h1>
      </Link>
      <hr className={styles.separator} />
      <div className={styles.details}>
        <p>By Saad Baig</p>
        <span>|</span>
        <p>5 Jan 2021</p>
      </div>
      <img src={sample} alt="sample" />
      <p className={styles.description}>
        Contrary to popular belief, user interface design isn’t just about
        creating pretty pixels on a screen to share on Dribbble (although that
        can be fun). While UI design is an art form, it’s also a science with a
        myriad of tools and techniques used to effectively communicate with
        users. The result is an interface that’s simple, beautiful and easy to
        use.
      </p>
      <Link to={`/blog/${slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  )
}

export default Blog
