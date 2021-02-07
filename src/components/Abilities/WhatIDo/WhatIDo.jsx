import React from "react"
import comet from '../../../images/facts/comet.png'
import styles from "./WhatIDo.module.scss"

const WhatIDo = () => {
  return (
    <div className={styles.container}>
      <h2>What I Do?</h2>
      <div className={styles.content}>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Develop responsive and highly interactive Front End / User Interfaces.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Focus on writing clean, elegant and efficient code.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Create Backend Applications in Node/Express.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Transform Design into High Quality Code.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Integrate NodeJS APIs in React.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Swear at computer.</p>
        </div>
        <div className={styles.row}>
          <img src={comet} alt="comet" />
          <p>Eat Pizza.</p>
        </div>
      </div>
    </div>
  )
}

export default WhatIDo
