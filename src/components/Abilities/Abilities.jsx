import React from "react"
import Quote from "../Quote/Quote"
import styles from "./Abilities.module.scss"
import Skills from "./Skills/Skills"
import WhatIDo from "./WhatIDo/WhatIDo"

const Abilities = () => {
  return (
    <div className={styles.container} id="skills">
      <h1>Abilities</h1>
      <Quote
        quote="Life without knowledge is death in disguise."
        author="Talib Kweli"
      />
      <Skills />
      <WhatIDo />
    </div>
  )
}

export default Abilities
