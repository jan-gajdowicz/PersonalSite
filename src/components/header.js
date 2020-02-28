import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/header.sass"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      personalInfo {
        name
      }
    }
  `)
  const { name } = data.personalInfo

  return (
    <header className="header">
      <div className="header__container">
        <div header__>
          <Link className="header__logo" to="/">{name}</Link>
        </div>
        <div className="header__menu">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/cv" className="header__link">CV</Link>
          <a href="https://github.com/jan-gajdowicz" className="header__link">Github</a>
        </div>
      </div>
    </header >
  )
}

export default Header
