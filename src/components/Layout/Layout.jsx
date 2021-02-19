import React, { useState } from "react"
import Footer from "./Footer/Footer"
import SideNav from "./SideNav/SideNav"
import Header from "./Header/Header"
import Modal from "../Projects/Modal/Modal"

const Layout = ({ children, primary, secondary, isOpenModal, setIsOpenModal, v, setV }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Modal v={v} setV={setV} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} primary={primary} secondary={secondary} />
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
