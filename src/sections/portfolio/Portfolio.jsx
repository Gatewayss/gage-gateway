import './portfolio.css'
import data from './data'
import Projects from './Projects'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
    <h2>Recent Projects</h2>
    <p>
    Check out some of the projects I recently worked on during my education at this U of M fullstack bootcamp.
    </p>
    
      <Projects projects={projects}/>
  </section>
  )
}

export default Portfolio