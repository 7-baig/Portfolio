import React from "react";
import styles from "./SideNav.module.scss";

const SideNav = ({ isOpen }) => {

  return (
    <div
      className={styles.container}
      style={isOpen ? { right: "0px" } : { right: "-320px" }}
>
      <div className={styles.row}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-laptop-code"}></i>
            <p>Skills</p>
          </div>
        <div className={styles.right}>
        <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-rocket"}></i>
            <p>Work Experiences</p>
          </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-glasses"}></i>
            <p>Projects</p>
          </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-feather"}></i>
            <p>Blog</p>
          </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
      <div className={styles.row}>
          <div className={styles.left}>
            <i className={styles.icon + " fas fa-mobile-alt"}></i>
            <p>Contact Me</p>
          </div>
        <div className={styles.right}>
          <i className={styles.icon + " fas fa-angle-double-right"}></i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default SideNav;
