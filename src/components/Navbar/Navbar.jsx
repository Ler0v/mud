import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown';
import MenuIcon from '../menuIcon/menuIcon'


const Navbar = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => { 
      setClicked(!clicked)
  }

  return (
    <div className="navContainer">
      <Link to='/' className='mudLogoNav' ><img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" id='imgNav' alt="i1" /></Link>
      <div className='navItemsContainer'>
        <ul className={`nav ${clicked ? 'active' : ''}`}>
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
              <Link to='/academia' className='navItem'
              onClick={handleClick}><Dropdown titulo={'MUD Academy'} texto1={'Carrera de maquillaje profesional'} texto2={'Curso de maquillaje social'} texto3={'Taller de laminado de cejas'} texto4={'Taller de divfting + nutricion + tinte'} texto5={'Taller de disenio de cejas + henna'} texto6={'Curso de peinados'} texto7={'Taller de trenzas'}/></Link>
            </li>
            <li>
              <Link to='/contacto' className='navItem' onClick={handleClick}>Contacto</Link>
            </li>
        </ul>
      </div>
      <div className='burguer'>
        <MenuIcon clicked={clicked} handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default Navbar