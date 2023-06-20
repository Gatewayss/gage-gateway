import './header.css'
import data from './data.js'
import HeaderImage from '../../assets/profile-pic.png'

const Header = () => {
  return (
    <section>
    <header id="header">
      <div className="container header-container">
        <div className="header-profile">
          <img src={HeaderImage} alt="Header Portrait"></img>
        </div>
        <h3>Gage Norton</h3>
        <p>
        As a recent Full-Stack web developer graduate, I excel at transforming ideas into results! With expertise in both front-end and back-end technologies, I create innovative solutions that bring ideas to life.
        </p>
        <div className="header-cta">
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
        </div>
        <div className="header-socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>
          )}
        </div>
      </div>
    </header>
    </section>
  )
}

export default Header