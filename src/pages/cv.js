import React from "react"

import "../styles/cv.sass"

import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Jobs from "../components/jobs"
import SEO from "../components/seo"

const SecondPage = () => {

  return (
    <Layout>
      <SEO title="Curriculum vitae" />
      <h1 className="layout__page-title">Curriculum vitae</h1>
      <div className="cv__container">
        <Jobs />
        <Sidebar />
      </div>
    </Layout >
  )
}

export default SecondPage
