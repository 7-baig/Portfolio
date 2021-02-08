import React from "react"
import comet from "../../../images/facts/comet.png"
import Fade from "react-reveal/Fade"
import styles from "./WhatIDo.module.scss"

const WhatIDo = () => {
  return (
    <div className={styles.container}>
      <h2>What I Do?</h2>
      <div className={styles.content}>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>
              Develop responsive and highly interactive Front End / User
              Interfaces.
            </p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Focus on writing clean, elegant and efficient code.</p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Create Backend Applications in Node/Express.</p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Transform Design into High Quality Code.</p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Integrate NodeJS APIs in React.</p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Swear at computer.</p>
          </div>
        </Fade>
        <Fade left>
          <div className={styles.row}>
            <img src={comet} alt="comet" />
            <p>Eat Pizza.</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default WhatIDo
