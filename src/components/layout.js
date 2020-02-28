import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/layout.sass"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout__container">
        <main className="layout__main">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
