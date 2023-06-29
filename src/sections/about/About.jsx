import './about.css'
import AboutImg from '../../assets/profile-pic.png'
import {HiDownload} from 'react-icons/hi'
import Resume from '../../assets/Tech_Resume.pdf'
import Card from '../../components/Card'
import data from './data.js'

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-portrait">
            <img src={AboutImg} alt="About me portrait" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {
              data.map(card => (
                <Card key={card.id} className="about-card">
                  <span className='about-card-icon'>{card.icon}</span>
                  <h5>{card.title}</h5>
                  <small>{card.desc}</small>
                </Card>
              ))
            }
          </div>
              <p>
              I am a recent graduate of U of M's full-stack web boot camp, pursuing my dream career. With almost ten years of experience in the food service industry, I was looking for a change that would require more flexible hours and a different set of problem-solving skills. Since discovering coding through friends in this field, I have developed a passion for web development. I am excited to continue developing my skills and exploring the ever-evolving world of web development.
              </p>
              <p>
              When I'm not coding, I immerse myself in a world of diverse hobbies. Music, reading, and painting are my cherished pursuits. As much as I relish the joy of creating new things that others can use and enjoy, I am equally captivated by the thrill of solving complex problems. These passions fuel my drive and bring a sense of fulfillment to my life.
              </p>
              <a href={Resume} className="btn primary" download>Download Resume <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About