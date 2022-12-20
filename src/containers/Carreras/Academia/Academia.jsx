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
              <InfoAcademia imagen={'https://i.postimg.cc/B6nVgBym/1.jpg'} titulo={'Carrera de maquillaje profesional'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'}
              />
            </div>
            <div className='academiaInfo'>
              <InfoAcademia titulo={'Chau'} info={'impsum'} />
            </div>
        </div>
    </>
  )
}

export default Academia