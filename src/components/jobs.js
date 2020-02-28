import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/jobs.sass"

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allJobs {
        nodes {
          name
          company
          time
          tasks
        } 
      }
    }
`)
  const { allJobs } = data

  return (
    <aside className="jobs__container">
      <div className="jobs__section">
        {allJobs.nodes.map(({ name, company, time, tasks }) => {
          return (
            <div className="jobs__item">
              <h2 className="jobs__name">
                {name}
                <span className="jobs__company">
                  {company}
                </span>
              </h2>
              <div className="jobs__time">
                {time}
              </div>
              <ul className="jobs__tasks">
                {tasks.map(task => (<li className="jobs__task">{task}</li>))}
              </ul>
            </div>
          )
        })}
      </div>
    </aside >
  )
}

export default Jobs
