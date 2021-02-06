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
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#experience">
            <li>Work Experiences</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#blogs">
            <li>Blog</li>
          </a>
          <a href="#contact">
            <li>Contact Me</li>
          </a>
        </ul>
        <i class="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
    </header>
  )
}

export default Header
