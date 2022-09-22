import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="navContainer">
          <img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imglogo' alt="i1" />
          <nav>
              <ul className='nav'>
                  <li>
                    <Link to='/' className='navItem'>Inicio</Link>
                  </li>
                  <li>
                    <Link to='/educacion' className='navItem'>Educacion</Link>
                  </li>
                  <li>
                    <Link to='/trabajos' className='navItem'>Trabajos</Link>
                  </li>
                  <li>
                    <Link to='/nosotros' className='navItem'>Nosotros</Link>
                  </li>
                  <li>
                    <Link to='/productos' className='navItem'>Productos</Link>
                  </li>
                  <li>
                    <Link to='/servicios' className='navItem'>Servicios</Link>
                  </li>
                  <li>
                    <Link to='/contacto' className='navItem'>Contacto</Link>
                  </li>
              </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar