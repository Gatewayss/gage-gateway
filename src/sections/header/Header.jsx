import './header.css'
import HeaderImage from '../../assets/portrait.jpg'

const Header = () => {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-profile">
          <img src={HeaderImage} alt="Header Portrait"></img>
        </div>
        <h3>Gage Norton</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur possimus quisquam illum esse? Cupiditate animi ea maiores. Quo dignissimos laudantium voluptatum totam, sed ducimus suscipit nobis hic maiores in.
        </p>
        <div className="header-cta">
          <a href='#contact'>Let's Talk</a>
          <a href='#portfolio'>My Work</a>
        </div>
      </div>
    </header>
  )
}

export default Header