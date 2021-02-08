import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <Headroom>
      <header className={styles.container}>
        <div className={styles.leftContainer}>
          <Link to="#about">
            <div className={styles.nameContainer}>
              <span className={styles.circle}>S</span>
              <p>
                <span>Saad</span> Baig
              </p>
            </div>
          </Link>
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
