import React from "react"
import vector from "../../images/about.svg"
import desktop from "../../images/icons/desktop.png"
import plane from "../../images/icons/plane.png"
import flag from "../../images/icons/pakistan-flag.png"
import write from "../../images/icons/write.png"
import books from "../../images/icons/books.png"
import laptop from "../../images/icons/laptop.png"
import drawing from "../../images/icons/drawing.png"
import twitter from "../../images/icons/twitter.png"
import astronaut from "../../images/facts/astronaut.png"
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src={vector} alt="developer" />
      </div>
      <div className={styles.rightContainer}>
        <p>Full-Stack Developer</p>
        <div className={styles.nameContainer}>
          <h1>Saad Baig</h1>
          <img src={astronaut} alt="astronaut" />
        </div>
        <p>
          Hi, I'm a Full-Stack Web developer from Pakistan
          {/* <img className={styles.icon} src={flag} alt="pakistan-flag" /> */}
          , working with web technologies{" "}
          {/* <img className={styles.icon} src={desktop} alt="desktop-icon" />  */}
          for 2+ years. When I'm not Coding{" "}
          {/* <img className={styles.icon} src={laptop} alt="laptop" /> */},
          writing articles{" "}
          {/* <img className={styles.icon} src={write} alt="writing" />  */}
          or tweeting,{" "}
          {/* <img className={styles.icon} src={twitter} alt="twitter-icon" /> */}
          you'll find me reading books,{" "}
          {/* <img className={styles.icon} src={books} alt="books" /> */}
          drawing{" "}
          {/* <img className={styles.icon} src={drawing} alt="drawing-icon" /> */}
          and travelling
          {/* <img className={styles.icon} src={plane} alt="plane" /> */}.
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
