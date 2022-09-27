import React from 'react'
import './inicio.css'
import videoInicio from '../../assets/videoInicio.mp4'
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <>
      <video src={videoInicio} autoPlay loop muted overflow className='videoBody' />
      <div className='mudAnimado'>
        <h1>M</h1>
        <h1>U</h1>
        <h1>D</h1>
      </div>
      <div className='cardsBody'>
        <h1 className='letraIndex'>Nuestros servicios</h1>
        <Link to='/servicios'><img src="https://i.postimg.cc/Kv0vyGFs/IMG-1265.jpg" className='card1' alt="imgB1" /></Link>
      </div>
      <div className='cardsBody'>
        <h1 className='letraIndex'>Nuestras carreras</h1>
        <Link to='/carreras'><img src="https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg" className='card2' alt="imgB2" /></Link>
      </div>
      <div className='cardsBody'>
        <h1 className='letraIndex'>Nuestros productos</h1>
        <Link to='/productos'><img src="https://i.postimg.cc/fTsnq69q/1edit.jpg" className='card3' alt="imgB3" /></Link>
      </div>
      <div className="aboutIndex">
        <p>MUD nació hace 15 años como un proyecto creativo de Celeste González, directora de la compañía.</p>
        <img src="https://makeupdesign.com.ar/img/nosotros/celeste.jpg" alt="aboutIndexfoto" />
      </div>
    </>
  )
}

export default Inicio