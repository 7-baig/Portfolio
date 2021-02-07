import React from "react"
import Quote from '../Quote/Quote'
import Education from "./Education/Education"
import styles from "./Experiences.module.scss"

const Experiences = () => {
  return (
    <div className={styles.container}>
      <h1>Experiences</h1>
      <Quote
        quote="Protons give an atom its identity, electrons its personality."
        author="Bill Bryson"
      />
      <Education />
    </div>
  )
}

export default Experiences
