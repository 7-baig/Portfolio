import React from "react"
import styles from "./Template.module.scss"

const Template = ({ title, row }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {row.map(row => (
        <div className={styles.educationContainer} key={row.institute}>
          <div className={styles.leftContainer}>
            <h3>{row.institute}</h3>
            <p>{row.duration}</p>
          </div>
          <div className={styles.rightContainer}>
            <h4>{row.level}</h4>
            <p>{row.description}</p>
            {row.website ? (
              <p>
                <a href={row.website} target="_blank">
                  <i className={"fas fa-map-marker-alt"}></i> {row.location}
                  &nbsp; | &nbsp;
                  <i className={"fas fa-globe"}></i> {row.website}
                </a>
              </p>
            ) : (
              <p>
                <i className={"fas fa-map-marker-alt"}></i> {row.location}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Template
