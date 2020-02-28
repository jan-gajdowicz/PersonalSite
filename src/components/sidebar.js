import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Stars from "./stars.js"
import "../styles/sidebar.sass"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      personalInfo {
        location
        phone
        email
        education
        interests
      }
      allLanguages {
        nodes {
          name
          stars
        } 
      }
      allSkills {
        nodes {
          name
          stars
        } 
      }
    }
`)
  const { allLanguages, allSkills, personalInfo: { location,
    phone,
    email,
    education,
    interests }
  } = data

  return (
    <aside className="sidebar__container">
      <div className="sidebar__section">
        <h3 className="sidebar__header">Location</h3>
        <div className="sidebar__item">{location}</div>
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Phone</h3>
        <div className="sidebar__item">{phone}</div>
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Email</h3>
        <div className="sidebar__item">{email}</div>
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Languages</h3>
        {allLanguages.nodes.map(({ name, stars }) => {
          return (
            <div className="sidebar__item">
              <div className="sidebar__item-name">
                {name}
              </div>
              <Stars count={stars} />
            </div>
          )
        })}
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Skills</h3>
        {allSkills.nodes.map(({ name, stars }) => {
          return (
            <div className="sidebar__item">
              <div className="sidebar__item-name">
                {name}
              </div>
              <Stars count={stars} />
            </div>
          )
        })}
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Education</h3>
        <div className="sidebar__item">{education}</div>
      </div>
      <div className="sidebar__section">
        <h3 className="sidebar__header">Interests</h3>
        <div className="sidebar__item">{interests}</div>
      </div>
    </aside >
  )
}

export default Sidebar
