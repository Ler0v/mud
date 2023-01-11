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
                  <button onClick={()=> setInfo("Carrera Maquillaje")}>Carrera de maquillaje profesional</button>
                  <button onClick={()=> setInfo("Curso maquillaje")}>Curso de maquillaje socia</button>
                  <button onClick={()=> setInfo("Diseño y perfilado")}>Diseño y perfilado de cejas + Henna</button>
                  <button onClick={()=> setInfo("Brow")}>Brow Lamination</button>
                  <button onClick={()=> setInfo("Lash")}>Lash Lifting</button>
                  <button onClick={()=> setInfo("peinados")}>Curso de peinados</button>
                  <button onClick={()=> setInfo("Taller trenzas")}>Taller de trenzas</button>
                </div>
                <div className="academiaInfo">
                  {info === "Carrera Maquillaje"
                   && 
                   <>
                    <h1>Carrera de maquillaje profesional</h1>
                    <p>Hace más de 15 años que formamos artistas y buscamos talentos para que puedan desarrollarse en esta maravillosa profesión.</p>
                    <p>En el archivo que vas a encontrar más abajo podes ver más info acerca de la carrera, de la academia y de quienes formamos parte de ella.</p>
                    <h1>La carrera</h1>
                    <p>La Carrera de Maquillaje Profesional tiene una duración de 6 meses, está formada por el módulo Social (2 meses) y el módulo Profesional (4 meses).</p>
                    <p><span>¡100% presencial!</span></p>
                    <p>Da el primer paso para trabajar de lo que te gusta y apasiona. Recibite y arma tu emprendimiento en forma independiente.</p>
                    <p><span>La carrera se dicta en forma PRESENCIAL. Grupos reducidos.</span></p>
                    <ul>
                      <li>La modalidad de cursada es una vez por semana, con clases de 3 horas (1 hora teórica y 2 horas prácticas - se practica entre compañeras/os). Amplia disponibilidad horaria, con turnos por la mañana, la tarde o la noche.</li>
                      <li>Al finalizar la cursada, se evalúa el desempeño mediante un Examen Final, que consta de una parte teórica (examen escrito) y una parte práctica (con modelo, sesión fotográfica).</li>
                      <li>Ceremonia de Graduación: Examen Final Práctico y entrega de Certificado y Credencial de Maquilladora Profesional.</li>
                      <li>Todas las clases son audiovisuales.</li>
                    </ul>
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
                   </>
                  }

                  {info === "Curso maquillaje"
                   && 
                   <>
                    <h1>Curso de maquillaje social</h1>
                    <p>En el Curso de Maquillaje Social tendrás las clases especificas para conocer las técnicas correctas para realizar un maquillaje para evento.</p>
                    <p>Es ideal para los que quieren incursionar en el mundo del maquillaje y dar sus primeros pasos en esta profesión. Es un curso rápido, ágil y dinámico, con rápida salida laboral.</p>
                    <h1>Modalidad:</h1>
                    <ul>
                      <p>- Presencial u opción online.</p>
                      <p>- Duración: 2 meses.</p>
                      <p>- Se cursa 1 vez por semana en clases de 2 horas y media aproximadamente.</p>
                    </ul>
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
                    <h1>Beneficios de alumnas MUD</h1>
                    <ul>
                      <li>Materiales para el uso en clases incluídos (tanto la pincelería como los maquillajes - nacionales, importados y MUD Cosmetics).</li>
                      <li>Certificado</li>
                      <li>Descuentos exclusivos en productos profesionales.</li>
                    </ul>
                   </>
                  }
                  {info === "Diseño y perfilado"
                   && 
                   <>
                    <h1>Diseño y perfilado de cejas + henna</h1>
                    <p>Las cejas son nada más ni nada menos que el marco del rostro, de ahí la importancia de su cuidado y atención.</p>
                    <p>En este curso, vas a aprender cómo diseñar cejas desde cero, en base al visagismo y las facciones de cada persona, a perfilar y depilarlas correctamente para lograr la forma ideal, y a realizar tinte de cejas con henna para aportar mayor color y definición a las cejas.
                    Aprende de la mano de expertas a realizar el servicio más solicitado en MUD.
                    </p>
                    <h1>Modalidad online-presencial:</h1>
                    <p>- Acceso al material digital teórico de por vida: estudia donde quieras, cuando quieras. Material teórico + videos paso a paso.</p>
                    <p>- Práctica presencial de 1 hora aprox. con modelo, supervisada por MUD Staff. Entrega de certificado.</p>
                    <p><b>ATENCIÓN: para realizar la práctica presencial se debe haber estudiado el material digital proporcionado. Para obtener el título se debe rendir la práctica presencial obligatoria. Todos los materiales para la práctica son proporcionados por MUD.</b></p>
                    <h1>Programa:</h1>
                    <p>- Visagismo</p>
                    <p>- Tipos de cejas</p>
                    <p>- Diseño de cejas</p>
                    <p>- Depilación con pincita</p>
                    <p>- Uso correcto de perfilador</p>
                    <p>- Preparación y aplicación de henna</p>
                   </>
                  }
                  {info === "Brow"
                   && 
                   <>
                    <h1>hola</h1>
                    <h6>chau</h6>
                   </>
                  }
                  {info === "Lash"
                   && 
                   <>
                    <h1>hola</h1>
                    <h6>chau</h6>
                   </>
                  }
                  {info === "peinados"
                   && 
                   <>
                    <h1>Curso de peinados</h1>
                    <p>El curso de peinados es ideal para aquellas personas que quieran aprender a peinar desde un nivel básico, sean o no peluqueras. Es ideal para maquilladoras para poder sumar un servicio muy rentable. Las alumnas aprenderán técnicas básicas de peinados, para poder realizar los mismos que están en tendencia, de forma efectiva profesional y duradera.</p>
                    <h1>Modalidad:</h1>
                    <p>- 100% presencial.</p>
                    <p>- Duración: 2 meses.</p>
                   </>
                  }
                  {info === "Taller trenzas"
                   && 
                   <>
                    <h1>CHAU</h1>
                    <h6>HOLA</h6>
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