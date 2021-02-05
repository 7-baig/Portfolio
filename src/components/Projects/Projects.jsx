import React from "react"
import sample from "../../images/projects/project.png"
import styles from "./Projects.module.scss"

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.project}>
          <img src={sample} alt="sample" />
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
          <img src={sample} alt="sample" />
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
          <img src={sample} alt="sample" />
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
      </div>
    </div>
  )
}

export default Projects
