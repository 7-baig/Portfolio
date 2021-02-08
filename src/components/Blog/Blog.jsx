import React from "react"
import sample from "../../images/projects/restaurant.jpg"
import styles from "./Blog.module.scss"

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1>UI design books you should read in 2021</h1>
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
      <button>Read More</button>
    </div>
  )
}

export default Blog
