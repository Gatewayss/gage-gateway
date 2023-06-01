import './about.css'
import AboutImg from '../../assets/portrait.jpg'
import {HiDownload} from 'react-icons/hi'
import Resume from '../../assets/Resume.pdf'

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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis labore et corporis, tempora quibusdam voluptatum optio minus officia minima eveniet quidem quaerat aperiam accusamus deleniti ratione a maiores inventore ipsum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur odio quia, soluta ipsum esse natus. Doloribus possimus aut sit, nisi porro veniam iure reprehenderit tenetur quibusdam. Ab, voluptatibus eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore magnam quam error repellat neque magni reiciendis dolores libero nisi, ullam voluptatem ex corrupti, quibusdam soluta, suscipit eos ut earum nobis.
              </p>
              <a href={Resume} className="btn primary" download>Download Resume <HiDownload/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About