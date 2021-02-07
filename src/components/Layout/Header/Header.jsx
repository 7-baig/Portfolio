import React, { useState, useEffect } from "react"
import SideNav from "../SideNav/SideNav"
import useDocumentScrollThrottled from '../../../components/useDocumentScrollThrottled/useDocumentScrollThrottled'
import styles from "./Header.module.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : styles.container;

  return (
    <header className={`${shadowStyle} ${hiddenStyle}`}>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={styles.leftContainer}>
        <div className={styles.nameContainer}>
          <span className={styles.circle}>S</span>
          <p>
            <span>Saad</span> Baig
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <ul>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#experience">
            <li>Experiences</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#blogs">
            <li>Blog</li>
          </a>
          <a href="#contact">
            <li>Contact Me</li>
          </a>
        </ul>
        <i class="fas fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
      </div>
    </header>
  )
}

export default Header
