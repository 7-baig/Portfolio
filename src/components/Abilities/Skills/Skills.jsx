import React from "react"
import html from "../../../images/skills/html5.svg"
import css from "../../../images/skills/css3.svg"
import sass from "../../../images/skills/sass.svg"
import javascript from "../../../images/skills/javascript.svg"
import react from "../../../images/skills/react.svg"
import gatsby from "../../../images/skills/gatsby.svg"
import node from "../../../images/skills/nodejs.svg"
import mongodb from "../../../images/skills/mongodb.svg"
import npm from "../../../images/skills/npm.svg"
import firebase from "../../../images/skills/firebase.svg"
import Fade from "react-reveal/Fade"
import styles from "./Skills.module.scss"

const Skills = () => {
  return (
    <div className={styles.container}>
      <h2>Skills</h2>
      <div className={styles.skills}>
        <Fade left>
          <div className={styles.row}>
            <p>HTML5</p>
            <img src={html} alt="html5-icon" />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.row}>
            <p>CSS3</p>
            <img src={css} alt="css3-icon" />
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <p>SASS</p>
            <img src={sass} alt="sass-icon" />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.row}>
            <p>JAVASCRIPT</p>
            <img src={javascript} alt="javascript-icon" />
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <p>REACTJS</p>
            <img src={react} alt="react-icon" />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.row}>
            <p>GATSBYJS</p>
            <img src={gatsby} alt="gatsby-icon" />
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <p>NODEJS</p>
            <img src={node} alt="node-icon" />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.row}>
            <p>NPM</p>
            <img src={npm} alt="npm-icon" />
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <p>MONGODB</p>
            <img src={mongodb} alt="mongodb-icon" />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.row}>
            <p>FIREBASE</p>
            <img src={firebase} alt="firebase-icon" />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Skills
