import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import styles from "./Email.module.scss"

const Email = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return (
    <Fade bottom>
      <div className={styles.container}>
        <h1>Send me an email</h1>
        <form>
          <div className={styles.wrapper}>
            <div className={styles.leftContainer}>
              <div className={styles.field}>
                <label>Your name:</label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  required
                  onChange={e => setName(e.target.value)}
                ></input>
              </div>
              <div className={styles.field}>
                <label>Your email:</label>
                <input
                  type="text"
                  value={email}
                  name="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.field}>
                <label>Your message:</label>
                <textarea
                  type="text"
                  value={message}
                  name="message"
                  required
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <a
            href={`mailto:saadbaig7777@gmail.com?subject=${name}%20contacting%20Saad%20Baig&body=${message}&from=hello`}
          >
            Send email
          </a>
        </form>
      </div>
    </Fade>
  )
}

export default Email
