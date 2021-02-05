import React from "react"
import styles from "./Header.module.scss"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.nameContainer}>
          <span className={styles.circle}>S</span>
          <p>
            <span>Saad</span> Baig
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ul>
          <li>Skills</li>
          <li>Work Experiences</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact Me</li>
        </ul>
        <i class="fas fa-bars"></i>
      </div>
    </div>
  )
}

export default Header
