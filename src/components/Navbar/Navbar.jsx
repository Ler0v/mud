import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';


const Navbar = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => { 
      setClicked(!clicked)
  }

  return (
    <div className="navContainer">
      <div>
        <Link to='/' className='navItem' ><img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imglogoMobile' alt="i1" /></Link>
      </div>
      <div className='navItemsContainer'>
        <ul className={`nav`}>
            <li >
              <Link to='/' className='navItem' ><img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imglogoDesktop' id='imgNav' alt="i1" /></Link>
            </li>
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
              <Link to='/sobrenosotros' className='navItem' onClick={handleClick}>Nosotros</Link>
            </li>
            <li>
              <Link to='/productos' className='navItem' onClick={handleClick}>Productos</Link>
            </li>
            <li className='dropDownContainer'>
              <Dropdown titulo={'MUD Academy'} texto1={'Carrera de maquillaje profesional'} texto2={'Curso de maquillaje social'} texto3={'Taller de laminado de cejas'} texto4={'Taller de divfting + nutricion + tinte'} texto5={'Taller de disenio de cejas + henna'} texto6={'Curso de peinados'} texto7={'Taller de trenzas'}/>
            </li>
            <li>
              <Link to='/contacto' className='navItem' onClick={handleClick}>Contacto</Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar