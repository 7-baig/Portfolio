import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p> &copy; 2021, Saad Baig <i className="fas fa-heart"></i> </p>
    </footer>
  )
}

export default Footer