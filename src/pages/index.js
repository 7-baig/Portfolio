import React from "react"
import About from "../components/About/About"
import Layout from "../components/Layout/Layout"
import Projects from "../components/Projects/Projects"

export default function Home() {
  return (
    <Layout>
      <About />
      <Projects />
    </Layout>
  )
}
