import React from 'react'
import './academia.css'
import InfoAcademia from './infoAcademia/InfoAcademia'


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
              <h1>Nuestras Carreras</h1>
              <div className='infoAcademia'>
                <img src="https://i.postimg.cc/3NRjrTwZ/Whats-App-Image-2022-09-29-at-10-37-1.png" alt="fotoAcademia" />
                <div className='seccionAcademia'>
                  <button>Carrera de maquillaje profesional</button>
                  <button>Curso de maquillaje social</button>
                  <button>Taller de laminado de cejas</button>
                  <button>Taller de divfting + nutricion + tinte</button>
                  <button>Taller de disenio de cejas + henna</button>
                  <button>Curso de peinados</button>
                  <button>Taller de trenzas</button>
                </div>
              </div>
            </div>
          </div>
            <div className='academiaInfo'>
              <InfoAcademia titulo={'Carrera de maquillaje profesional'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'} />
            </div>
            <div className='academiaInfo'>
              <InfoAcademia titulo={'Chau'} info={'impsum'} />
            </div>
        </div>
    </>
  )
}

export default Academia