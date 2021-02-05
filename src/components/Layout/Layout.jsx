import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
