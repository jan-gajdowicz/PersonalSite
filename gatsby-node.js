exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const skills = require('./content/skills.js')
  const jobs = require('./content/jobs.js')
  const languages = require('./content/languages.js')
  const index = require('./content/index.js')

  const personalInfo = {
    ...index,
    id: createNodeId(`Personal-${index.name}`),
    internal: {
      type: "personalInfo",
      contentDigest: createContentDigest(index),
    }
  }

  actions.createNode(personalInfo)

  skills.forEach(({ name, stars }) => {
    const node = {
      name,
      stars,
      id: createNodeId(`Skill-${name}`),
      internal: {
        type: "Skills",
        contentDigest: createContentDigest({ name, stars }),
      },
    }
    actions.createNode(node)
  })

  languages.forEach(({ name, stars }) => {
    const node = {
      name,
      stars,
      id: createNodeId(`Language-${name}`),
      internal: {
        type: "Languages",
        contentDigest: createContentDigest({ name, stars }),
      },
    }
    actions.createNode(node)
  })

  jobs.forEach(({ name, company, time, tasks }) => {
    const node = {
      name,
      company,
      tasks,
      time,
      id: createNodeId(`Job-${company}`),
      internal: {
        type: "Jobs",
        contentDigest: createContentDigest({ name, company, time, tasks }),
      },
    }
    actions.createNode(node)
  })
}