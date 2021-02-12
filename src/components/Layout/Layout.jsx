import React, { useState } from "react"
import Footer from "./Footer/Footer"
import SideNav from "./SideNav/SideNav"
import Header from "./Header/Header"

const Layout = ({ children, primary, secondary }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} primary={primary} secondary={secondary} />
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} primary={primary} secondary={secondary} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
