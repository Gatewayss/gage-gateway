import './header.css'
import data from './data.js'
import HeaderImage from '../../assets/portrait.jpg'

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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vero, dolore quos dicta, ea at odit aliquam iste iusto explicabo ducimus, vel voluptatum repudiandae nobis. Fugiat doloribus vel assumenda? Cupiditate!
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