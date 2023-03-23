import React from 'react'
import './academia.css'
import { useState } from 'react'


const Academia = () => {

  const [info, setInfo] = useState("")

  return (
    <>
        <div className='academiaContainer'>
          <div className='headerAcademia'>
            <div className='headerItemPosition1'>
              <p className='headerItem1'>MUD Academy</p>
              <p className='headerItem3'>CONVERTITE EN UN MAKEUP ARTIST</p>
              <p className='headerItem2'>Aprende las mejores técnicas de la mano de artistas certificados, aspira al trabajo de tus sueños</p>
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
                  <button onClick={()=> setInfo("Carrera Maquillaje")}>Carrera de maquillaje profesional</button>
                  <button onClick={()=> setInfo("Curso maquillaje")}>Curso de maquillaje social</button>
                  <button onClick={()=> setInfo("Diseño y perfilado")}>Diseño y perfilado de cejas + Henna</button>
                  <button onClick={()=> setInfo("Brow")}>Brow Lamination</button>
                  <button onClick={()=> setInfo("Lash")}>Lash Lifting</button>
                  <button onClick={()=> setInfo("peinados")}>Curso de peinados</button>
                  <button onClick={()=> setInfo("Taller trenzas")}>Taller de trenzas</button>
                  <button onClick={()=> setInfo("Manicuria")}>Curso de manicuria</button>
                  <button onClick={()=> setInfo("Manicuria Rusa")}>Curso de manicuria Rusa con Torno</button>
                </div>
                <div className="academiaInfoDetalle">
                  {info === "Carrera Maquillaje"
                   && 
                   <div className='informacion'>
                    <h1>Carrera de maquillaje profesional</h1>
                    <p>Si te apasiona el maquillaje y el trabajo creativo, tenés una Carrera con rápida y rentable salida laboral. Además te conectamos con Pasantías profesionales en producciones y desfiles para empezar a hacer pràcticas y prepararte para la vida profesional.</p>
                    <hr />
                    <p><b>Duracion: 6 meses.</b></p>
                    <p><b>Cursada: 1 vez por semana, en sesion de 3 horas</b></p>
                    <hr />
                    <h1>Modalidad: </h1>
                    <p>- Dinámica presencial.</p>
                    <p>- Contas con materiales en la academia para tu cursada</p>
                    <hr />
                    <h3>Que vas a aprender?</h3>
                    <p><span>Aprendé a crear looks para distintas ocasiones estilos, y paletas .</span></p>
                    <ul>
                      <li>Usar los principios de la teoría del color al elegir los colores en el maquillaje.</li>
                      <li>Manejá las imperfecciones de la piel y logra resultados impecables utilizando diferentes tipos de bases</li>
                      <li>Conocé la magia del diseño de contornos</li>
                      <li>Dale fuerza a la mirada aprendiendo sobre el diseño de cejas, el maquillaje de ojos y acentuando rasgos para lograr naturalidad o intensidad.</li>
                      <li>Trabajar con diferentes texturas de productos labiales para corregir la forma la boca, lograr un color duradero, o que permanezcan más sutiles</li>
                      <li>Practicas para afianzar conocimientos y técnicas</li>
                    </ul>
                    <hr />
                    <h1>Beneficio alumnas MUD</h1>
                    <ul>
                      <li>Materiales para el uso en clases incluídos (tanto la pincelería como los maquillajes - nacionales, importados y MUD Cosmetics). Entrega del material teórico para el examen final.</li>
                      <li>Certificado y Credencial de Maquilladora (MUD Pro Star Card).</li>
                      <li>Descuentos exclusivos en productos profesionales.</li>
                      <li>Entrega del material fotográfico profesional del Examen Final Práctico.</li>
                      <li>Pasantías rentadas y ad honorem durante la cursada.</li>
                      <li>Disponibilidad del material audiovisual clase a clase.</li>
                      <li>Ambiente amigable: WiFi Zone y ambiente climatizado.</li>
                    </ul>
                    <hr />
                    <button className='botonInscripcion'>Inscribite ahora!</button>
                   </div>
                  }

                  {info === "Curso maquillaje"
                   && 
                   <>
                    <div className='informacion'>
                      <h1>Curso de maquillaje social</h1>
                      <p>Y si te maquillaras como una profesional, todos los dias?</p>
                      <p>Vení a aprender herramientas profesionales para que tu maquillaje dure mas y resaltes tus facciones naturales</p>
                      <hr />
                      <p><b>Duración. 1 mes: 4 clases de 3 horas cada una</b></p>
                      <hr />
                      <h1>Modalidad:</h1>
                      <p>- Presencial u opción online.</p>
                      <p>- Duración: 2 meses.</p>
                      <p>- Se cursa 1 vez por semana en clases de 2 horas y media aproximadamente.</p>
                      <hr />
                      <h1>Programa:</h1>
                      <ul>
                        <p>- CLASE 1: Preparación de piel y primeros pasos</p>
                        <p>- CLASE 2: Colorimetría</p>
                        <p>- CLASE 3: Sombreados y depneados</p>
                        <p>- CLASE 4: Visagismo</p>
                        <p>- CLASE 5: Novias</p>
                        <p>- CLASE 6: 15 Años</p>
                        <p>- CLASE 7: Madrinas</p>
                        <p>- CLASE 8: Smokey Eyes</p>
                      </ul>
                      <hr />
                      <h1>Beneficios de alumnas MUD</h1>
                      <ul>
                        <li>Materiales para el uso en clases incluídos (tanto la pincelería como los maquillajes - nacionales, importados y MUD Cosmetics).</li>
                        <li>Certificado</li>
                        <li>Descuentos exclusivos en productos profesionales.</li>
                      </ul>
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                    </div>
                   </>
                  }

                  {info === "Diseño y perfilado"
                   && 
                   <>
                   <div className='informacion'>
                    <h1>Diseño + henna</h1>
                      <p>Aprende la técnica para resaltar la mirada!</p>
                      <p>En este taller te enseñamos la técnica mas novedosa de la industria para que seas una especialista</p>
                      <hr />
                      <p><b>Duración: Curso corto, de 1 clase de 2 horas para recorrer todas las formas de hacer trenzas.</b></p>
                      <hr />
                      <h1>Modalidad:</h1>
                      <p>- Presencial</p>
                      <p>- Te damos en taller las herramientas y materiales de trabajo para la cursada.</p>
                      <hr />
                      <h3>Que vas a aprender?</h3>
                      <ul>
                        <li>Funcionalidad morfológica de las pestañas, anatomía, forma, geometría.</li>
                        <li>Anatomía del pelo, ciclo de crecimiento, y cuidados.</li> 
                        <li>Preparación para cuidar la pestaña.</li>
                        <li>Definición del diseño, técnica de pinza y tintura.</li>
                        <li>Técnicas especificas.</li>
                        <li>Consejos prácticos y errores a evitar.</li>
                        <li>Productos especiales.</li>
                        <li>Practica sobre casos reales.</li>
                      </ul>
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                   </div>
                   </>
                  }

                  {info === "Brow"
                   && 
                   <>
                   <div className='informacion'>
                    <h1>Laminado de cejas</h1>
                      <p>Aprende la técnica del momento!</p>
                      <p>Laminado de cejas nivel PRO. En este taller te enseñamos la técnica mas novedosa de la industria para que seas una especialista</p>
                      <hr />
                      <p><b>Duración: Curso corto, de 1 clase de 3 horas para aprender sobre laminados y miradas radiantes</b></p>
                      <h1>Modalidad:</h1>
                      <p>- Presencial</p>
                      <p>- Te damos en taller las <b>herramientas y materiales de trabajo incluido</b> para la cursada</p>
                      <p><b>ATENCIÓN: para realizar la práctica presencial se debe haber estudiado el material digital proporcionado. Para obtener el título se debe rendir la práctica presencial obligatoria. Todos los materiales para la práctica son proporcionados por MUD.</b></p>                      
                      <hr />
                      <h3>Que vas a aprender?</h3>
                      <ul>
                        <li>Funcionalidad morfológica de las cejas, anatomía, forma, geometría.</li>
                        <li>Anatomía del pelo, ciclo de crecimiento, y cuidados.</li>
                        <li>Preparación para intervenir la ceja.</li>
                        <li>Procedimiento de alisado, laminado, perfilado, tinturas.</li>
                        <li>Técnicas especificas para cada procedimiento.</li>
                        <li>Consejos prácticos y errores a evitar.</li>
                        <li>Productos especiales.</li>
                        <li>Practica.</li>
                      </ul>
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                   </div>
                   </>
                  }

                  {info === "Lash"
                   && 
                   <>
                    <div className='informacion'>
                      <h1>Lifting de pestanias</h1>
                      <p>Aprende la técnica para levantar la mirada!</p>
                      <p>Desde efectos naturales a impactantes, aprende la técnica de lifting para resaltar la mirada y los ojos.</p>
                      <hr />
                      <p><b>Duración: Curso corto, de 1 clase de 3 horas para aprender sobre lifting de cejas</b></p>
                      <h1>Modalidad:</h1>
                      <p>- Presencial.</p>
                      <p>- Te damos en taller las herramientas y materiales de trabajo para la cursada.</p>
                      <hr />
                      <h3>Que vas a aprender?</h3>
                        <ul>
                          <li>Funcionalidad morfológica de las pestañas, anatomía, forma, geometría</li>
                          <li>Anatomía del pelo, ciclo de crecimiento, y cuidados.</li>
                          <li>Preparación para cuidar la pestaña.</li>
                          <li>Procedimiento de lifting y tintura.</li>
                          <li>Técnicas especificas.</li>
                          <li>Consejos prácticos y errores a evitar.</li>
                          <li>Productos especiales.</li>
                          <li>Practica.</li>
                        </ul>
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                    </div>
                   </>
                  }

                  {info === "peinados"
                   && 
                   <>
                    <div className='informacion'>
                      <h1>Curso de peinados</h1>
                      <p>Queres aprender técnicas y formas de peinado?</p>
                      <p>Conoce este curso básico para una rápida salida laboral en el mundo de la belleza.</p>
                      <hr />
                      <p><b>Duración: Este es un curso corto, de 3 clases de 2 horas para recorrer las técnicas de peinado.</b></p>
                      <h1>Modalidad:</h1>
                      <p>Presencial.</p>
                      <p>Te damos en taller las herramientas de trabajo para la cursada.</p>
                      <hr />
                      <h3>Que vas a aprender?</h3>
                      <ul>
                        <li>Preparación del cabello.</li>
                        <li>Técnicas básicas de marcados, y bucleados.</li>
                        <li>Aprendé sobre productos capilares de styling.</li>
                        <li>Nuevas técnicas de manejo del Cabello.</li>
                        <li>Peinados Clásicos, de fiesta, para eventos y recursos como trenzados, recogidos melenas, flequillos.</li>
                        <li>Practica.</li>
                      </ul>
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                    </div>
                   </>
                  }

                  {info === "Taller trenzas"
                   && 
                   <>
                    <h1>Taller de trenzas</h1>
                    <p>Las trenzas tienen su magia, y te enseñamos los trucos</p>
                    <hr />
                    <p><b>Duración: Curso corto, de 1 clases de 3 horas para recorrer todas las formas de hacer trenzas.</b></p>
                    <h1>Modalidad:</h1>
                    <p>Presencial</p>
                    <p>Te damos en taller las herramientas de trabajo para la cursada.</p>
                    <hr />
                    <h3>Que vas a aprender?</h3>
                    <ul>
                      <li>Preparación del cabello.</li>
                      <li>Productos a utilizar.</li>
                      <li>Accesorios.</li>
                      <li>Trenzas cosidas, relieve, zigzag, trenza espiga, trenzas caladas.</li>
                      <li>Trenzas de 3 cabos, 2 cabos.</li>
                      <li>Mezcla de trenzas con otros peinados.</li>
                      <li>Trenzas de mayor complejidad.</li>
                      <li>Introducción al esterillado.</li>
                      <li>Practica.</li>
                    </ul>
                    <hr />
                    <h1>BENEFICIOS ALUMNAS MUD</h1>
                    <ul>
                      <li>Incluye las cabezas de práctica.</li>
                      <li>Certificado</li>
                    </ul>
                    <hr />
                    <button className='botonInscripcion'>Inscribite ahora!</button>
                   </>
                  }

                  {info === "Manicuria" 
                    &&
                    <>
                      <h1>Curso de manicuria</h1>
                      <p>Aplicar de esmalte y pasos para realizar una perfecta belleza de manos</p>
                      <p>Técnica de esmaltado Semi-permanente para aumenta la durabilidad del esmaltado.</p>
                      <hr />
                      <hr />
                      <h1>Modalidad:</h1>
                      <p>- 100% presencial.</p>
                      <p>- Duración: 2 meses (8 clases).</p>
                      <p>- Se cursa 1 vez por semana en clases de 2 horas.</p>
                      <hr />
                      <hr />
                      <h1>Programa</h1>
                      <p>- Anatomía de la uña</p>
                      <p>- Reconocimiento de diferentes pieles</p>
                      <p>- Anomalías más comunes en las uñas</p>
                      <p>- Manicuría rusa combinada</p>
                      <p>- Reconocimiento de productos y materiales</p>
                      <p>- Preparación lámina ungueal</p>
                      <p>- Técnicas básicas de limado</p>
                      <p>- Esmaltado semipermanente</p>
                      <p>- Retirado</p>
                      <hr />
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                    </>
                  }

                  {
                    info ===  "Manicuria Rusa"
                    &&
                    <>
                      <h1>Manicuria Rusa con Torno</h1>
                      <p>Si ya hiciste el Curso de Manicuría MUD o tenes conocimientos de manicuría tradicional este curso es para vos. Lleva tu servicio al siguiente nivel.</p>
                      <p>Trabajaremos la manicuría rusa con torno, dando una limpieza profunda en la zona del pliegue proximal dejando un acabado perfecto, aprenderemos a realizar una correcta utilización del torno tanto para la manicuría, como para la preparación de la uña natural y retirado de material artificial. </p>
                      <p>El curso constará con material teórico de apoyo y será 90% práctica.</p>
                      <hr />
                      <hr />
                      <h1>Modalidad:</h1>
                      <p>- 100% presencial.</p>
                      <p>- Duración: 1 mes (4 clases).</p>
                      <p>- Se cursa 1 vez por semana en clases de 2 horas.</p>
                      <p>- Se entrega certificado.</p>
                      <hr />
                      <hr />
                      <h1>Programa:</h1>
                      <p>- Funcionamiento del torno, características, etc.</p>
                      <p>- Uso del torno.</p>
                      <p>- Reconocimiento de diferentes fresas.</p>
                      <p>- Uso de las fresas.</p>
                      <p>- Correcta utilización del torno.</p>
                      <p>- Manicuría rusa.</p>
                      <p>- Retirado de material artificial.</p>
                      <hr />
                      <hr />
                      <h1>Materiales solicitados</h1>
                      <p>- Lima gramaje 100/180 </p>
                      <p>- Corta cutícula </p>
                      <p>- Repujador</p>
                      <p>Fresas para Manicuría:</p>
                      <ul>
                        <li>Fresa flama o fuego</li>
                        <li>Fresa pulidora</li>
                      </ul>
                      <hr />
                      <hr />
                      <button className='botonInscripcion'>Inscribite ahora!</button>
                    </>
                  }
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Academia