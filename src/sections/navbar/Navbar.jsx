import data from './data.js'
import './navbar.css'
import logo from '../../assets/download.jpg'
import {IoIosColorPalette} from 'react-icons/io'
import { useModalContext } from '../../context/modal-context'

export const Navbar = () => {
  const {showModalHandler} = useModalContext();

  return (
    <nav>
      <div className="container nav-container">
        <a href='index.html'><img src={logo} alt="logo" className='nav-logo'></img></a>
        <ul className="nav-menu">
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button onClick={showModalHandler} id="theme-icon"><IoIosColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar