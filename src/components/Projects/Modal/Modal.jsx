import React from "react"
import video from "../../../assets/video.mp4"
import styles from "./Modal.module.scss"

const Modal = ({ isOpen }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.overlay}
        style={
          isOpen
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
      >
        <div className={styles.popup}>
          <video loop autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Modal
