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
                  <button><a href='#carreraMaquillaje'>Carrera de maquillaje profesional</a></button>
                  <button><a href='#cursoMaquillaje'>Curso de maquillaje social</a></button>
                  <button><a href='#tallerCejas'>Taller de laminado de cejas</a></button>
                  <button><a href='#tallerLifting'>Taller de lifting + nutricion + tinte</a></button>
                  <button><a href='#tallerCejasHenna'>Taller de disenio de cejas + henna</a></button>
                  <button><a href='#cursoPeinados'>Curso de peinados</a></button>
                  <button><a href='#tallertrenzas'>Taller de trenzas</a></button>
                </div>
              </div>
            </div>
          </div>
            <section className='academiaInfo' id='carreraMaquillaje'>
              <InfoAcademia imagen={'https://i.postimg.cc/B6nVgBym/1.jpg'} titulo={'Carrera de maquillaje profesional'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'}
              />
            </section>
            <div className='academiaInfo' id='cursoMaquillaje'>
              <InfoAcademia  imagen={'https://i.postimg.cc/Kv0vyGFs/IMG-1265.jpg'} titulo={'Curso de maquillaje social'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
            <div className='academiaInfo' id='tallerCejas' >
              <InfoAcademia imagen={'https://i.postimg.cc/Jh7Ytzqd/7.jpg'} titulo={'Taller de laminado de cejas'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
            <div className='academiaInfo' id='tallerLifting'>
              <InfoAcademia  imagen={'https://i.postimg.cc/B6nVgBym/1.jpg'} titulo={'Taller de lifting + nutricion + tinte'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
            <div className='academiaInfo' id='tallerCejasHenna'>
              <InfoAcademia  imagen={'https://i.postimg.cc/B6nVgBym/1.jpg'} titulo={'Taller de disenio de cejas + henna'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
            <div className='academiaInfo' id='cursoPeinados'>
              <InfoAcademia  imagen={'https://i.postimg.cc/B6nVgBym/1.jpg'} titulo={'Curso de peinados'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
            <div className='academiaInfo' id='tallertrenzas'>
              <InfoAcademia  imagen={'https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg'} titulo={'Carrera de maquillaje profesional'} info1={'Ideal para apasionados por el maquillaje y trabajo creativo'} info2={'Rapida y rentable salida laboral'} info3={'Pasantias profesionales en producciones y desfiles'} info4={'Credencial profesional'} info5={'Certificado profesional'} info6={'Portafolio profesional'} info7={'Duracion 6 meses y clases de 3 horas'}
              info21={'La carrera de maquillaje profesional tiene una duracion de 6 meses , se cursa 1 vez por por semana en 3 clases por hora'} info22={'Tiene una dinámica teórico/práctica/audiovisual ágil para poder avanzar en la formación. Está organizada por niveles para la correcta formación de los profesionales'} banner1={'Beauty'} banner2={'Fashion'} banner3={'Artistic'}
              bannerInfo={'-Preparacion de la piel y primeros pasos.'} bannerInfo2={'-Todo sobre ojos: anatomia, formologia, sobreados, contraste, esfumados, delineados, cejas, pestanias.'} bannerInfo3={'-Boca, correciones ovalo facial, rubor, highlight.'} bannerInfo4={'-Sociales: novias, 15 anios, madrinas, eventos.'} bannerInfo5={'-Smoke eyes'} bannerInfo21={'-Maquillaje con texturas, patinas, efectos, pigmentos.'} bannerInfo22={'-Cut crease.'} bannerInfo23={'-Epoca'} bannerInfo24={'-Disenio de cejas'} bannerInfo25={'-Pasarella'} bannerInfo26={'-Face Chart'} bannerInfo27={'-Fotografia'} bannerInfo28={'-Editorial'} bannerInfo31={'-Cine HD'} bannerInfo32={'-TV HD'} bannerInfo33={'-Efectos para cine'} bannerInfo34={'-Caracterizaciones'} bannerInfo35={'-Artistico'} bannerInfo36={'-Teatro'} />
            </div>
        </div>
    </>
  )
}

export default Academia