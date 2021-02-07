import React from "react"
import sample from "../../images/projects/project.png"
import quiz from "../../images/projects/quiz.jpg"
import Quote from "../Quote/Quote"
import rocket from "../../images/projects/rocket.png"
import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <div className={styles.container} id="projects">
      <div className={styles.header}>
        <h1>Projects</h1>
        <img src={rocket} alt="rocket" />
      </div>
      <Quote
        quote="You can do anything you set your mind to."
        author="Benjamin Franklin"
      />
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <img src={sample} alt="sample" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
        <div className={styles.project}>
          <img src={quiz} alt="quiz" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
        <div className={styles.project}>
          <img src={sample} alt="sample" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
        <div className={styles.project}>
          <img src={quiz} alt="quiz" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
        <div className={styles.project}>
          <img src={sample} alt="sample" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
        <div className={styles.project}>
          <img src={quiz} alt="quiz" />
          <h3 className={styles.show}>E-Commerce Application</h3>
          <p>React JS / Node JS</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
