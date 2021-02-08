import React, { useState } from "react"
import Footer from "./Footer/Footer"
import SideNav from "./SideNav/SideNav"
import Header from "./Header/Header"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
