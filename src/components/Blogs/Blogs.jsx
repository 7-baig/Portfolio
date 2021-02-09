import React from "react"
import sample from "../../images/blogs/blog.jpg"
import Quote from "../Quote/Quote"
import write from "../../images/icons/write.png"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import styles from "./Blogs.module.scss"

const Blogs = () => {
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
          <div className={styles.blog}>
            <img src={sample} alt="sample-image" />
            <h3>Breaking Your Coder's Block</h3>
            <small>May 14, 2019</small>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, adipisicing elit. Voluptatem quam
              repellendus accusantium quis dolore.
            </p>
          </div>
          <div className={styles.blog}>
            <img src={sample} alt="sample-image" />
            <h3>Breaking Your Coder's Block</h3>
            <small>May 14, 2019</small>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, adipisicing elit. Voluptatem quam
              repellendus accusantium quis dolore.
            </p>
          </div>
          <div className={styles.blog}>
            <img src={sample} alt="sample-image" />
            <h3>Breaking Your Coder's Block</h3>
            <small>May 14, 2019</small>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, adipisicing elit. Voluptatem quam
              repellendus accusantium quis dolore.
            </p>
          </div>
          <div className={styles.blog}>
            <img src={sample} alt="sample-image" />
            <h3>Breaking Your Coder's Block</h3>
            <small>May 14, 2019</small>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, adipisicing elit. Voluptatem quam
              repellendus accusantium quis dolore.
            </p>
          </div>
        </div>
        <Link to="/blog">
          <button className={styles.viewAll}>View all blogs</button>
        </Link>
      </div>
    </Fade>
  )
}

export default Blogs
