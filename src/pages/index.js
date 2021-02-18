import React, { useState } from "react"
import Abilities from "../components/Abilities/Abilities"
import About from "../components/About/About"
import Blogs from "../components/Blogs/Blogs"
import Contact from "../components/Contact/Contact"
import Email from "../components/Email/Email"
import Experiences from "../components/Experiences/Experiences"
import Facts from "../components/Facts/Facts"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <Layout primary={true} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <About />
      <Abilities />
      <Experiences />
      <Projects isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      <Blogs />
      <Facts />
      <Contact />
      <Email />
    </Layout>
  )
}
