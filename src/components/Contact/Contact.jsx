import React from "react"
import me from "../../images/contact/me.jpg"
import facebook from "../../images/contact/facebook.svg"
import twitter from "../../images/contact/twitter.svg"
import github from "../../images/contact/github.svg"
import linkedin from "../../images/contact/linkedin.svg"
import styles from "./Contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <h1>Contact me</h1>
          <p>Have a question? or want to work together?</p>
          <div className={styles.socialContainer}>
            <div className={styles.social}>
              <img src={facebook} alt="facebook-icon" />
              <p className={styles.fb}>Like me on Facebook</p>
            </div>
            <div className={styles.social}>
              <img src={twitter} alt="twitter-icon" />
              <p className={styles.twitter}>Follow me on Twitter</p>
            </div>
            <div className={styles.social}>
              <img src={github} alt="github-icon" />
              <p className={styles.git}>Follow me on Github</p>
            </div>
            <div className={styles.social}>
              <img src={linkedin} alt="linkedin-icon" />
              <p className={styles.linkedin}>Connect on Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src={me} alt="Saad Baig" />
      </div>
    </div>
  )
}

export default Contact
