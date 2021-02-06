import React from "react"
import sample from "../../images/blogs/blog.jpg"
import Quote from "../Quote/Quote"
import styles from "./Blogs.module.scss"

const Blogs = () => {
  return (
    <div className={styles.container} id="blogs">
      <h1>Blogs</h1>
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
    </div>
  )
}

export default Blogs
