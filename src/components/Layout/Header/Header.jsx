import React, { useState } from "react"
import SideNav from "../SideNav/SideNav"
import styles from "./Header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className={styles.container}>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
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
        <i class="fas fa-bars" onClick={() => setIsOpen(!isOpen)} ></i>
      </div>
    </header>
  )
}

export default Header
