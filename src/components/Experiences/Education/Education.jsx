import React from "react"
import styles from "./Education.module.scss"

const Education = () => {
  return (
    <div className={styles.container}>
      <h2>Education</h2>
      <div className={styles.educationContainer}>
        <div className={styles.leftContainer}>
          <h3>Axiom</h3>
          <p>2019 - 2020</p>
        </div>
        <div className={styles.rightContainer}>
          <h4>Course - Cloud Native Computing / MERN Stack Development</h4>
          <p>
            Cloud native is an approach to building and running applications
            that exploits the advantages of the cloud computing delivery model.
            Whereas, MERN is a javascript Stack for building dynamic web sites and web applications.
            This course taught me about the devOps and Full Stack Web Development.
          </p>
          <p>
            <i className={"fas fa-map-marker-alt"}></i> Karachi
          </p>
        </div>
      </div>

      <div className={styles.educationContainer}>
        <div className={styles.leftContainer}>
          <h3>Jinnah Govt. College</h3>
          <p>2017 - 2019</p>
        </div>
        <div className={styles.rightContainer}>
          <h4>Intermediate - (Pre-Engineering)</h4>
          <p>
            During my time in college, I continued learning physics, chemistry
            and mathematics. Also during this time, I started to create static
            HTML5 and CSS3 websites.
          </p>
          <p>
            <i className={"fas fa-map-marker-alt"}></i> Karachi
          </p>
        </div>
      </div>

      <div className={styles.educationContainer}>
        <div className={styles.leftContainer}>
          <h3>Green Land Public School</h3>
          <p>2004 - 2017</p>
        </div>
        <div className={styles.rightContainer}>
          <h4>Highschool - (Computer Science)</h4>
          <p>
            I completed School, where I enjoyed doing computer science, maths,
            physics and arts. I realized in the last year of school that I
            wanted to do something with software, so I started learning HTML5
            and CSS3.
          </p>
          <p>
            <i className={"fas fa-map-marker-alt"}></i> Karachi
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education
