import React from "react"
import vector from "../../images/about.svg"
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={vector} alt="developer" />
      </div>
      <div className={styles.rightContainer}>
        <p>Full-Stack Developer</p>
        <h1>Saad Baig</h1>
        <p>
          Hi, I'm a Full-Stack Web developer, working with web technologies for
          2+ years. Besides Coding, I like to read books, write articles and
          travel
        </p>
        <div className={styles.btnContainer}>
          <button>Download CV</button>
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default About