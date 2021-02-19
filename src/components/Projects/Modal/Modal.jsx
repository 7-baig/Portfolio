import React from "react"
import kpibar from "../../../assets/kpibar.mp4"
import admiral from "../../../assets/admiral_cms.mp4"
import oncart from "../../../assets/oncart_cms.mp4"
import styles from "./Modal.module.scss"

const Modal = ({ isOpenModal, setIsOpenModal, v, setV }) => {
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
            <source src={v === "kpibar" ? kpibar : v === "admiral" ? admiral : oncart} type="video/mp4" />
          </video>
          <i className={styles.times + " fas fa-times"} onClick={() => setIsOpenModal(!isOpenModal)}></i>
        </div>
      </div>
    </div>
  )
}

export default Modal
