import React from "react"
import { Link } from "gatsby"
import styles from "./SideNav.module.scss"

const SideNav = ({ isOpen, setIsOpen, primary, secondary }) => {
  return (
    <div
      className={styles.container}
      style={isOpen ? { right: "0px" } : { right: "-320px" }}
    >
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-laptop-code"}></i>
          <Link
            to={primary ? "#skills" : "/#skills"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Skills</p>
          </Link>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-rocket"}></i>
          <Link
            to={primary ? "#experience" : "/#experience"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Experiences</p>
          </Link>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-glasses"}></i>
          <Link
            to={primary ? "#projects" : "/#projects"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Projects</p>
          </Link>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-feather"}></i>
          <Link to="/blog" onClick={() => setIsOpen(!isOpen)}>
            <p>Blog</p>
          </Link>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
        <div className={styles.left}>
          <i className={styles.icon + " fas fa-mobile-alt"}></i>
          <Link
            to={primary ? "#contact" : "/#contact"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Contact Me</p>
          </Link>
        </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SideNav
