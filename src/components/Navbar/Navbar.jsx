import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../../assets/menu.svg'


const Navbar = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => { 
      setClicked(!clicked)
  }

  return (
    <div className="navContainer">
      <nav>
          <Link to='/' className='navItem' ><img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imglogo' alt="i1" /></Link>
          <img src={Menu} alt="menuIcon"  className='menuIcon active' onClick={handleClick}/>
          <div>
            <ul className={`nav ${clicked ? 'active slide-in-top' : ''}`}>
                <li>
                  <Link to='/' className='navItem' onClick={handleClick}>Inicio</Link>
                </li>
                <li>
                  <Link to='/servicios' className='navItem' onClick={handleClick}>Servicios</Link>
                </li>
                <li>
                  <Link to='/trabajos' className='navItem' onClick={handleClick}>Trabajos</Link>
                </li>
                <li>
                  <Link to='/nosotros' className='navItem' onClick={handleClick}>Nosotros</Link>
                </li>
                <li>
                  <Link to='/productos' className='navItem' onClick={handleClick}>Productos</Link>
                </li>
                <li>
                  <Link to='/educacion' className='navItem' onClick={handleClick} >Carreras</Link>
                </li>
                <li>
                  <Link to='/contacto' className='navItem' onClick={handleClick}>Contacto</Link>
                </li>
            </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar