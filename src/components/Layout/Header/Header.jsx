import React from "react"
import Headroom from "react-headroom"
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = ({ isOpen, setIsOpen, primary, secondary }) => {
  return (
    <Headroom>
      <header className={styles.container}>
        <div className={styles.leftContainer}>
          <Link to={primary ? "/Portfolio" : "/Portfolio"}>
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
              <Link to={primary ? "#skills" : "/Portfolio/#skills"}>Skills</Link>
            </li>
            <li>
              <Link to={primary ? "#experience" : "/Portfolio/#experience"}>Experiences</Link>
            </li>
            <li>
              <Link to={primary ? "#projects" : "/Portfolio/#projects"}>Projects</Link>
            </li>
            <li>
              <Link to="/Portfolio/blog">Blog</Link>
            </li>
            <li>
              <Link to={primary ? "#contact" : "/Portfolio/#contact"}>Contact Me</Link>
            </li>
          </ul>
          <i class="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
        </div>
      </header>
    </Headroom>
  )
}

export default Header
