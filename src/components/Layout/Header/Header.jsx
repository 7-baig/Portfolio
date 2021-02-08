import React, { useState } from "react"
import SideNav from "../SideNav/SideNav"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Headroom>
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
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#experience">Experiences</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#blogs">Blog</Link>
            </li>
            <li>
              <Link to="#contact">Contact Me</Link>
            </li>
          </ul>
          <i class="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
