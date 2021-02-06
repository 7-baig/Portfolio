import React from "react"
import About from "../components/About/About"
import Blogs from "../components/Blogs/Blogs"
import Contact from "../components/Contact/Contact"
import Email from "../components/Email/Email"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"

export default function Home() {
  return (
    <Layout>
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Email />
    </Layout>
  )
}
