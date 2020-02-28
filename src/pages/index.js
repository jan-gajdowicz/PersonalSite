import React from "react"
import { useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      personalInfo {
        position
        description
      }
    }
  `)
  const { position, description } = data.personalInfo

  return (
    <Layout>
      <SEO title="Home" />
      <div className="layout__page">
        <h1 className="layout__page-title">Hi, my name is Jan!</h1>
        <p className="layout__page-description">{description}</p>
        <Link to="/cv" className="layout__button">check my CV</Link>
      </div>
    </Layout>
  )
}

export default IndexPage
