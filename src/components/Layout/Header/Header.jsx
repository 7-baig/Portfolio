import React from "react"
import Headroom from "react-headroom"
import menu from '../../../images/icons/menu.png'
import { Link } from "gatsby"
import styles from "./Header.module.scss"

const Header = ({ isOpen, setIsOpen, primary, secondary }) => {
  return (
    <Headroom>
      <header className={styles.container}>
        <div className={styles.leftContainer}>
          <Link to={primary ? "/" : "/"}>
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
              <Link to={primary ? "#skills" : "/#skills"}>Skills</Link>
            </li>
            <li>
              <Link to={primary ? "#experience" : "/#experience"}>Experiences</Link>
            </li>
            <li>
              <Link to={primary ? "#projects" : "/#projects"}>Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to={primary ? "#contact" : "/#contact"}>Contact Me</Link>
            </li>
          </ul>
          <img className={styles.menuIcon} src={menu} alt="menu-icon" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </header>
    </Headroom>
  )
}

export default Header
