import React from 'react'
import './academia.css'


const Academia = () => {
  return (
    <>
        <div className='academiaContainer'>
          <div className='headerAcademia'>
            <div className='headerItemPosition1'>
              <p className='headerItem1'>MUD Academy</p>
              <p className='headerItem2'>Aprende las mejores técnicas de la mano de artistas certificados, aspira al trabajo de tus sueños</p>
              <p className='headerItem3'>CONVERTITE EN UN MAKEUP ARTIST</p>
            </div>
            <div className='headerItemPosition2'>
              <img src="https://i.postimg.cc/vmgHLtJZ/SISTEMA-DE-EDUCACION-MUD-ACADEMY-FULL-BLANCO-1.png" alt="headerimg2" />
            </div>
          </div>
          <div className='academiaItems'>
            <div className='MUDMaquillajeProfesional'>
              <h1>Carrera de Maquillaje Profesional</h1>
              <div className='infoAcademia'>
                <img src="https://i.postimg.cc/3NRjrTwZ/Whats-App-Image-2022-09-29-at-10-37-1.png" alt="fotoAcademia" />
                <div className='seccionAcademia'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto hic corrupti tempore consectetur minima, itaque reprehenderit commodi sit veritatis ipsam aspernatur obcaecati omnis assumenda eaque corporis sint temporibus error nam?</p>
                  <button className='btnAcademia'>Ver mas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Academia