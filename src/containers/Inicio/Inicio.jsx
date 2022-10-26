import React from 'react'
import './inicio.css'
import videoInicio from '../../assets/videoInicio.mp4'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <div className='videoBody'>
        <video className='videoBodyItem' src={videoInicio} autoPlay loop muted />
      </div>
      {/* <div className='mudAnimado'>
        <p className='letraAnimada'>M</p>
        <p className='letraAnimada'>U</p>
        <p className='letraAnimada'>D</p>
      </div> */}
      <div className='cardsBodyContainer'>
        <h1 className='tituloCardsBody'>Porque MUD?</h1>
        <div className="cardsBody">
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestros servicios</h1>
            <Link to='/servicios'><img src="https://i.postimg.cc/Kv0vyGFs/IMG-1265.jpg" className='card1' alt="imgB1" /></Link>
          </div>
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestras carreras</h1>
            <Link to='/carreras'><img src="https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg" className='card2' alt="imgB2" /></Link>
          </div>
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestros productos</h1>
             <Link to='/productos'><img src="https://i.postimg.cc/fTsnq69q/1edit.jpg" className='card3' alt="imgB3" /></Link>
          </div>     
        </div>
      </div>
      <div className="aboutIndex">
        <img src="https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg" alt="aboutIndexfoto" />
        <div className='aboutIndexInfo'>
          <h1>Nuestros trabajos</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet minima cupiditate quos hic repellat corrupti nam neque molestias deleniti esse saepe animi, doloremque quam in maxime? Omnis accusamus veniam velit.</p>
          <Link to='/trabajos'><button>Ver Trabajos</button></Link>
        </div>
      </div>
      <div className='contactoInicioContainer'>
        <div className='contactoInicioInfo'>
            <p>Contactanos!</p>
            <div className='botonesContacto'>
              <Link to='/'><img src="https://i.postimg.cc/Vv4K8x3q/icons8-whatsapp-30.png"  className='botonesContactoImg' alt="contactoInicio" /></Link>
              <Link to='/'><img src="https://i.postimg.cc/Pxv8jJqb/icons8-mail-30.png"  className='botonesContactoImg' alt="contactoInicio" /></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Inicio