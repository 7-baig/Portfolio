import React from "react"
import styles from "./Modal.module.scss"

const Modal = ({ isOpenModal, setIsOpenModal, v, setV }) => {
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
          {/* <video loop autoPlay muted>
            <source src={} type="video/mp4" />
          </video> */}
          <i className={styles.times + " fas fa-times"} onClick={() => setIsOpenModal(!isOpenModal)}></i>
        </div>
      </div>
    </div>
  )
}

export default Modal
