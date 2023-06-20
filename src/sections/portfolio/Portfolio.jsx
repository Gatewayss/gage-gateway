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
    Check out some of the projects I recently finished during my education at this U of M fullstack bootcamp.
    </p>
    
      <Projects projects={projects}/>

    <p className='portfolio-link'>To see more of my work check out my projects on
      <br/>
      <a href="https://github.com/Gatewayss" target="_blank" rel="noreferrer">Github!</a>
    </p>
  </section>
  )
}

export default Portfolio 