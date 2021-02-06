import React from "react"
import Quote from "../Quote/Quote"
import styles from "./Abilities.module.scss"
import Skills from "./Skills/Skills"

const Abilities = () => {
  return (
    <div className={styles.container}>
      <h1>Abilities</h1>
      <Quote
        quote="Life without knowledge is death in disguise."
        author="Talib Kweli"
      />
      <Skills />
    </div>
  )
}

export default Abilities
