import React from "react"
import styles from "./Email.module.scss"

const Email = () => {
  return (
    <div className={styles.container}>
      <h1>Send me an email</h1>
      <form>
        <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <div className={styles.field}>
              <label>Your name:</label>
              <input type="text"></input>
            </div>
            <div className={styles.field}>
              <label>Your email:</label>
              <input type="text"></input>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.field}>
              <label>Your message:</label>
              <textarea type="text" />
            </div>
          </div>
        </div>
        <button>Send email</button>
      </form>
    </div>
  )
}

export default Email
