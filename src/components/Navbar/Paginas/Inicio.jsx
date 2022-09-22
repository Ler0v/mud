import React from 'react'
import videoInicio from '../../../assets/videoInicio.mp4'

const Inicio = () => {
  return (
    <>
      <video src={videoInicio} autoPlay loop muted />
      <h1 className='tituloBody'>Nuestros trabajos</h1>
      <div className='cardsBody'>
        <img src="https://i.postimg.cc/Kv0vyGFs/IMG-1265.jpg" className='card1' alt="imgB1" />
        <img src="https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg" className='card2' alt="imgB2" />
        <img src="https://i.postimg.cc/fTsnq69q/1edit.jpg" className='card3' alt="imgB3" />
        <img src="https://i.postimg.cc/fTsnq69q/1edit.jpg" className='card4' alt="imgB4" />
      </div>
    </>
  )
}

export default Inicio