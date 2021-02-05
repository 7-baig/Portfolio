import React from "react"
import vector from "../../images/about.svg"
import desktop from "../../images/icons/desktop.png"
import plane from "../../images/icons/plane.png"
import flag from "../../images/icons/pakistan-flag.png"
import write from "../../images/icons/write.png"
import books from "../../images/icons/books.png"
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
          Hi, I'm a Full-Stack Web developer from Pakistan{" "}
          <img className={styles.icon} src={flag} alt="pakistan-flag" />,
          working with web technologies{" "}
          <img className={styles.icon} src={desktop} alt="desktop-icon" /> for
          2+ years. Besides Coding, I like to read books{" "}
          <img className={styles.icon} src={books} alt="books" />, write
          articles <img className={styles.icon} src={write} alt="writing" /> and
          travel <img className={styles.icon} src={plane} alt="plane" />.
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
