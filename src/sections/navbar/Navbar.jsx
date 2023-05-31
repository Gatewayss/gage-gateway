import data from './data.js'
import './navbar.css'
import {IoIosColorPalette} from 'react-icons/io'

export const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href='index.html'><h1>Gage Norton</h1></a>
        <ul className="nav-menu">
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id="theme-icon"><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar