import React from "react"
import styles from "./WhatIDo.module.scss"

const WhatIDo = () => {
  return (
    <div className={styles.container}>
      <h2>What I Do?</h2>
      <div className={styles.content}>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Focus on writing clean, elegant and efficient code.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Develop responsive and highly interactive Front End / User Interfaces.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Integrate NodeJS APIs in React.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Transform Design into High Quality Code.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Create Backend Applications in Node/Express.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Eat Pizza.</p>
        </div>
        <div className={styles.row}>
          <i className={styles.icon + " fas fa-bolt"}></i>
          <p>Swear at computer.</p>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
