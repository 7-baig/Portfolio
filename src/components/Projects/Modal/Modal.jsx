import { clearConfigCache } from "prettier"
import React from "react"
import videooo from "../../../assets/video.mp4"
import videooo2 from "../../../assets/video_2.mp4"
import styles from "./Modal.module.scss"

const Modal = ({ isOpenModal, setIsOpenModal, v="" }) => {
console.log(v);
  return (
    <div className={styles.container}>
      <div
        className={styles.overlay}
        style={
          isOpenModal
            ? { visibility: "visible", opacity: "1" }
            : { visibility: "hidden", opacity: "0" }
        }
      >
        <div className={styles.popup}>
          <video loop autoPlay muted>
            <source src={v === "1" ? videooo : videooo2} type="video/mp4" />
          </video>
          <i className={styles.times + " fas fa-times"} onClick={() => setIsOpenModal(!isOpenModal)}></i>
        </div>
      </div>
    </div>
  )
}

export default Modal
