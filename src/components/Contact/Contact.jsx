import React from "react"
import me from "../../images/contact/me.jpg"
import facebook from "../../images/contact/facebook.svg"
import twitter from "../../images/contact/twitter.svg"
import github from "../../images/contact/github.svg"
import linkedin from "../../images/contact/linkedin.svg"
import Fade from "react-reveal/Fade"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <h1>Contact me</h1>
          <p>Have a question? or want to work together?</p>
          <div className={styles.socialContainer}>
            <Fade left>
              <a href="https://twitter.com/saadbaigg">
                <div className={styles.social}>
                  <img src={twitter} alt="twitter-icon" loading="lazy"/>
                  <p className={styles.twitter}>Follow me on Twitter</p>
                </div>
              </a>
            </Fade>
            <Fade left>
              <a href="https://github.com/saadbaigg">
                <div className={styles.social}>
                  <img src={github} alt="github-icon" />
                  <p className={styles.git}>Follow me on Github</p>
                </div>
              </a>
            </Fade>
            <Fade left>
              <a href="https://www.linkedin.com/in/saadbaigg/">
                <div className={styles.social}>
                  <img src={linkedin} alt="linkedin-icon" />
                  <p className={styles.linkedin}>Connect on Linkedin</p>
                </div>
              </a>
            </Fade>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Fade>
          <img src={me} alt="Saad Baig" />
        </Fade>
      </div>
    </div>
  )
}

export default Contact
