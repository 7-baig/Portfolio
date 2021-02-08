import React from "react"
import Quote from "../Quote/Quote"
import Template from "./Template/Template"
import laptop from "../../images/icons/laptop.png"
import Fade from "react-reveal/Fade"
import styles from "./Experiences.module.scss"

const Experiences = () => {
  return (
    <Fade bottom>
      <div className={styles.container} id="experience">
        <div className={styles.header}>
          <h1>Experiences</h1>
          <img src={laptop} alt="laptop" />
        </div>
        <Quote
          quote="View life as a continuous learning experience."
          author="Denis Waitley"
        />
        <Template
          title="Education"
          row={[
            {
              institute: "Axiom",
              duration: "2019 - 2020",
              level: "Course - Cloud Native Computing / MERN Stack Development",
              description:
                "Cloud native is an approach to building and running applications that exploits the advantages of the cloud computing delivery model. Whereas, MERN is a javascript Stack for building dynamic web sites and web applications. This course taught me about the devOps and Full Stack Web Development.",
              location: "Karachi",
            },
            {
              institute: "Jinnah Govt. College",
              duration: "2017 - 2019",
              level: "Intermediate - (Pre-Engineering)",
              description:
                "During my time in college, I continued learning physics, chemistry and mathematics. Also during this time, I started to create static HTML5 and CSS3 websites.",
              location: "Karachi",
            },
            {
              institute: "Green Land Public School",
              duration: "2004 - 2017",
              level: "Highschool - (Computer Science)",
              description:
                "I completed School, where I enjoyed doing computer science, maths, physics and arts. I realized in the last year of school that I wanted to do something with software, so I started learning HTML5 and CSS3.",
              location: "Karachi",
            },
          ]}
        />
        <hr />
        <Template
          title="Career"
          row={[
            {
              institute: "Upwork",
              duration: "2020 - current",
              level: "Part-time - Freelance Web Developer",
              description:
                "I also work as a part-time freelance web developer, I've developed a good number of projects including responsive web applications and Content management systems using ReactJS",
              location: "Remote",
              website: "https://upwork.com",
            },
            {
              institute: "Kpibar",
              duration: "2020 - current",
              level: "Part-time - Front End Web Developer",
              description:
                "Working as a Front End Web Developer on a spain based Saas company, Where I translate AdobeXD designs to responsive and interactive user interface using GatsbyJS",
              location: "Spain",
              website: "https://kpibar.com",
            },
          ]}
        />
      </div>
    </Fade>
  )
}

export default Experiences
