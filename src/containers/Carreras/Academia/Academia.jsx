import React from 'react'
import './academia.css'
import { useState } from 'react'




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
          <div className='academia'>
            <div className="academiaCarousel">
              <img src="https://i.postimg.cc/3NRjrTwZ/Whats-App-Image-2022-09-29-at-10-37-1.png" alt="fotoAcademia" />
            </div>
            <div className='academiaInfo'>
              <h1>Academia</h1>
              <div className='academiaBotones'>
                  <button>Carrera de maquillaje profesional</button>
                  <button>Curso de maquillaje socia</button>
                  <button>Diseño y perfilado de cejas + Henna</button>
                  <button>Brow Lamination</button>
                  <button>Lash Lifting</button>
                  <button>Curso de peinados</button>
                  <button>Taller de trenzas</button>
                </div>
                <div className="academiaInfo">
                
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Academia