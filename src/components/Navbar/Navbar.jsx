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
                    <Link to='/'>Inicio</Link>
                  </li>
                  <li>
                    <Link to='/educacion'>Educacion</Link>
                  </li>
                  <li>
                    <Link to='/trabajos'>Trabajos</Link>
                  </li>
                  <li>
                    <Link to='/nosotros'>Nosotros</Link>
                  </li>
                  <li>
                    <Link to='/productos'>Productos</Link>
                  </li>
                  <li>
                    <Link to='/servicios'>Servicios</Link>
                  </li>
                  <li>
                    <Link to='/contacto'>Contacto</Link>
                  </li>
              </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar