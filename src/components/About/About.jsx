import React from "react"
import vector from "../../images/about.svg"
import astronaut from "../../images/facts/astronaut.png"
import { Link } from 'gatsby'
import styles from "./About.module.scss"

const About = () => {
  return (
    <div className={styles.container} id="about">
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
          Hi, I'm a Full-Stack Web developer from Pakistan , working with web
          technologies for 2+ years. When I'm not Coding, tweeting or writing articles
          you'll find me reading books, drawing and travelling
        </p>
        <div className={styles.btnContainer}>
          <a href="../../images/icons/books.png" download>
            <button>Download CV</button>
          </a>
          <Link to="#contact">
            <button className={styles.contactBtn}>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
