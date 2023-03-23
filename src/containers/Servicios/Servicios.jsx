import React from 'react'
import './servicios.css'
import Carousel from './Carousel'
import {motion} from 'framer-motion'
import { useState } from 'react'


const Servicios = () => {

  const [info ,setInfo] = useState("")

  return (
    <>
      <div className='serviciosContainer'>
        <h1 className='Titulo'>Servicios</h1>
        <div className='serviciosContainerItem'> 
          <motion.div className="serviciosContainerItem1"
          initial={{y: +200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:2}}>
            <div className='servicioGuia'>
              <button style={{backgroundImage: "url('https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg')", backgroundPositionY:"-170px"}}><a href="#proMakeup"><p>Maquillaje profesional</p></a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem2"
          initial={{y: +200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:2}}
          >
            <div className='servicioGuia'>
              <button style={{backgroundImage: "url('https://i.postimg.cc/Wzhk8FSJ/IMG-6742.jpg')", backgroundPositionY:"-270px"}}><a href="#cejas"><p>Cejas</p></a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem3"
          initial={{y: +200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:3}}
          >
            <div className='servicioGuia'>
                <button style={{backgroundImage: "url('https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg')"}}><a href="#pestanias"><p>Pestañas</p></a></button>
              </div>
          </motion.div>
          <motion.div className="serviciosContainerItem4"
          initial={{y: 200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:3}}
          >
            <div className='servicioGuia'>
                <button style={{backgroundImage: "url('https://i.postimg.cc/gJbVmF8B/nail-hygiene-and-care-flat-lay.jpg')", backgroundPositionX:"-250px", backgroundPositionY:"-100px"}}><a href="#nails"><p>Uñas</p></a></button>
              </div>
          </motion.div>
        </div>
      </div>
    <section id='proMakeup'>
      <div className='servicio'>
        <div className='servicioCarousel'>
          <Carousel />
        </div>
        <div className='servicioInfo' >
          <h1>Maquillaje profesional</h1>
          <div className='servicioBotones'>
            <button className='botonServicio' onClick={()=> setInfo("Pro Makeup")}>Maquillaje profesional</button>
            <button onClick={()=> setInfo("Peinados")}>Peinados</button>
          </div>
          <div className='infoServicios'>
            {info === 'Pro Makeup' && 
            <div className='Info'>
              <div>
                <h2>Se la persona mas memorable/impactante del lugar.</h2>
                <p className='parrafoServicios'>Si la primera impresión cuenta, y una imagen vale mas que mil palabras, tu look dejara recuerdos imborrables.</p>
                <p>Como te preparas para ese momento especial? No vendemos actitud, por ahora! pero sabemos que un buen maquillaje te pone en la sintonia correcta.</p>
              </div>
              <br />
              <div>
                <h2>
                Veni a maquillarte con profesionales certificadas.
                </h2>
                  <p className='parrafoServicios'>-Usamos productos de la mejor calidad para tu piel para cuidarla durante y después del maquillaje.</p>
                  <p>-Nuestra técnica te da 10 horas de durabilidad a prueba de emociones. Que mejor que mostrarte autentica sin que se te corra el rimmel?</p>
              </div>
              <br />
              <div>
                <h2>Como lo hacemos:</h2>
                  <p className='parrafoServicios'>- Tenemos una primera comunicación para que nos cuentes detalles del evento y coordinamos el mejor horario.</p>
                  <p>-Máxima durabilidad: dejarte en manos de las profesionales MUD te garantizará un maquillaje intacto por hasta 10 horas. Conocemos los mejores trucos: sabemos implementar las técnicas más novedosas y que están en tendencia.</p>
                  <p>- Acordamos los detalles y pedidos especiales. Con esa información reunimos los mejores productos y elegimos el profesional experto para maquillarte. <i>La sesión de maquillaje dura aproximadamente 60 minutos e incluye la limpieza incial y unos masajes faciales.</i></p>
                  <p>Escribinos con fecha, hora y tipo de evento y te enviamos opciones de servicio para que estes radiante!</p>
              </div>
            </div>}  
            {info === "Peinados" && 
            <div className='Info'>
            <div>
                <h2>El pelo es el marco de la cara</h2>
                <p className='parrafoServicios'>Y el peinado es infalible arte para resaltar la belleza natural que ya tenes. Poné el acento en tu imagen. Romántica, Ejecutiva o elegante, el peinado acentúa tu look y define tu estilo.</p>
              </div>
              <br />
              <div>
                <h2>Ya sabes como querés sentirte hoy?</h2>
                  <p className='parrafoServicios'>En MUD usamos técnicas y secretos que son tendencia para que estes siempre un paso adelante en estilo.</p>
                  <p>Usamos productos de la mejor calidad para tu pelo, para cuidarlo durante y después del peinado, sin exigirlo y para que esté en su mejor versión. Con nuestros productos tenes 10 horas de durabilidad para que te muevas con soltura sin perder estilo.</p>
                  <p>La belleza esta en tu autenticidad. Y queremos que tu peinado acompañe tu espíritu.</p>
              </div>
              <br />
              <div>
                <p className='parrafoServicios'>- Escribinos con fecha, hora y tipo de evento y te enviamos opciones de peinado y diseño para que estes radiante!</p>
                <p>- Atendemos en nuestras sucursales y vamos a tus eventos para mas comodidad.</p>
                <p>- Los ojos son la Ventana del alma, y las cejas son la de tus emociones! Una cejas alineadas, y prolijas dan y claridad y marcan el tono a tus expresiones.</p>
              </div>
              </div>}
          </div>
        </div>
      </div>
    </section>
    <section id='cejas'>
      <div className='servicio'>
        <div className='servicioCarousel'>
          <Carousel />
        </div>
        <div className='servicioInfo'>
          <h1>Cejas</h1>
          <div className='servicioBotones'>
            <button className='botonServicio' onClick={()=> setInfo("Diseño")}>Diseño y Perfilado</button>
            <button className='botonServicio' onClick={()=> setInfo("Laminado")}>Laminado</button>
            <button className='botonServicio' onClick={()=> setInfo("Microblading")}>Microblading</button>
          </div>
          <div className="infoServicios">
          {info === 'Diseño' && 
            <div className='Info'>
                <div>
                  <h3>Los ojos son la Ventana del alma, y las cejas son la de tus emociones! Una cejas alineadas, y prolijas dan y claridad y marcan el tono a tus expresiones.</h3>
                  <br />
                  <h2>¿Qué es?</h2>
                  <p className='parrafoServicios'>El Diseño y Perfilado de cejas consiste en darle la forma correcta a tus cejas siempre respetando la forma natural de la misma mediante depilación con pincita, tijeras y perfilador</p>
                </div>
                <br />
                <div>
                  <h2>¿Cuánto dura?</h2>
                    <p className='parrafoServicios'>La duración va a variar según el ciclo de crecimiento de vello de cada persona, el cual generalmente va de las 3 a 4 semanas.</p>
                </div>
                <br />
                <div>
                  <h2>¿Cómo se hace?</h2>
                  <p className='parrafoServicios'>En una sesion de 15 minutos, Primero definimos el diseño y le damos forma con pinza. Luego aplicamos henna, un tratamiento semipermanente y natural para colorear y acentuar la forma deseada rellenando espacios raleados.</p>
                </div> 
                <div>
                  <h2>Ventajas</h2>
                  <p><b>- Indoloro: </b>es una técnica indolora no invasiva que actúa superficialmente, por lo cual no genera molestia ni dolor alguno durante o después de realizarlo.</p>
                  <p><b>- Versátil:</b>aunque está indicado para cejas más claritas y con poco vello o vello fino, todos pueden usar esta técnica para diseñar sus cejas.</p>
                  <p><b>- Durable: </b> el efecto se mantiene por 5 a 15 días, y luego va desapareciendo paulatinamente, por lo cual no requiere un mantenimiento si optás por desistir del efecto. Pero si querés mantenerlo podes volver a realizarlo cada 15 días aproximadamente.</p>
                </div>
            </div>} 
            {info === 'Laminado' && 
            <div className='Info'>
                <div>
                  <h3>Los ojos son la Ventana del alma, y las cejas son la de tus emociones! Una cejas alineadas, y prolijas dan y claridad y marcan el tono a tus expresiones.</h3>
                  <br />
                  <h2>¿Qué es?</h2>
                  <p className='parrafoServicios'>El Laminado de cejas o “Brow Lamination” es un tratamiento semipermanente que consigue un efecto de ceja “peinada”, alisando el pelo más rebelde y fijando la forma deseada. Da un leve efecto de mayor volumen</p>
                </div>
              <br />
                <div>
                  <h2>¿Cuánto dura?</h2>
                    <p className='parrafoServicios'>La duración va a variar según el ciclo de crecimiento de vello de cada persona, el cual generalmente va de las 3 a 4 semanas.</p>
                </div>
                <br />
                <div>
                  <h2>¿Cómo se hace?</h2>
                  <p className='parrafoServicios'>En una sesion de 40 minutos, primero hacemos un tratamiento con aminoácidos, para hidratar la ceja, luego se aplica un tratamiento para suavizar y alisar. Terminamos con botox y keratina para darle brillo y textura lisa.</p>
                </div> 
                <div>
                  <h2>Ventajas</h2>
                  <p><b>- Indoloro: </b>es una técnica indolora no invasiva que actúa superficialmente, por lo cual no genera molestia ni dolor alguno durante o después de realizarlo.</p>
                  <p><b>- Versátil:</b> aunque está indicado para cejas más claritas y con poco vello o vello fino, todos pueden usar esta técnica para diseñar sus cejas.</p>
                  <p><b>- Durabilidad:</b> el efecto se mantiene por 12 meses aproximadamente.</p>
                  <p><b>- Durable: </b> el efecto se mantiene por 4 a 6 semanas y luego va desapareciendo paulatinamente, por lo cual no requiere un mantenimiento si optás por desistir del efecto. Si queres mantenerlo podes volver a realizarlo.</p>
                </div>
            </div>}    
            {info === 'Microblading' && 
            <div className='Info'>
                <div>
                  <h2>Queres cejas espectaculares? El secreto esta en la proporción!</h2>
                  <p className='parrafoServicios'>Si sos como la mayoría, tal vez descubras que la forma de depilarte no es la correcta para tener una mirada profunda. Hay una proporción aurea que se aplica y va en función de tu estuctura ósea para que las facciones estén en armonía.</p>
                </div>
                <br />
                <div>
                  <h2>¿Qué es?</h2>
                    <p className='parrafoServicios'>Es una técnica manual de micropigmentación semipermanente, donde se recrea cada pelo de la ceja individualmente para lograr un efecto natural y realista. Claro que tenemos en cuenta el color de pelo natural de tus cejas, tus gustos y personalidad.</p>
                </div>
                <br />
                <div>
                  <h2>¿Cómo se hace?</h2>
                  <p className='parrafoServicios'>En lugar de seguir la forma de tus cejas tal como están, necesitas entender donde deben comenzar, arquear y terminar tus cejas para que tengan un aspecto natural que esté en proporción con el resto de tu cara.</p>
                  <p>Para ello tenes una consulta con nuestra especialista y si estan dadas las condiciones se concreta una cita. Primero definimos con vos el diseno, luego se hace el procedimiento, que tiene alguna similitud con un tatuaje pero que dura 12 meses. Luego de la primer aplicación se hace un control para terminar los detalles.</p>
                </div> 
                <div>
                  <p><b>- Indoloro: </b> Aunque es una técnica un poco mas invasiva se aplica una anestesia tópica durante la aplicación. Sin embargo, puede haber leve dolor o molestia luego de concluido el procedimiento.</p>
                  <p><b>- Corrige imperfecciones:</b> Si hay cicatrices, asimetrías, cambios de tono y alopecia, el microblading puede ser una solución adecuada para corregir irregularidades de la ceja y la piel.</p>
                  <p><b>- Durabilidad:</b> el efecto se mantiene por 12 meses aproximadamente.</p>
                </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
    <section id='pestanias'>
      <div className='servicio'>
        <div className='servicioCarousel'>
          <Carousel />
        </div>
        <div className='servicioInfo'>
          <h1>Pestañas</h1>
          <div className='servicioBotones'>
            <button className='botonServicio' onClick={()=> setInfo("Lifting")}>Lifting</button>
          </div>
          <div className="infoServicios">
            {info === 'Lifting' && 
            <div className='Info'>
                <div>
                  <h2>Enamorate de vos misma y de tu mirada atractiva.</h2>
                  <i>Eso lo logras con un lifting de pestañas! Sentite poderosa y encantadora con un toque mágico en tus pestañas</i>
                  <p className='parrafoServicios'>El lifting es una permanente que da forma y color a tus pestañas. A diferencia de las extensiones, el lifting modifica la forma y el color de tus pestañas naturales sin agegarpegamentos o productos irritantes</p>
                  <p>Así logras el efecto de pestañas más gruesas, oscuras y de aspecto más largo".</p>
                </div>
                <br />
                <div>
                  <h2>¿Qué es?</h2>
                    <p className='parrafoServicios'>El lifting es una permanente que da forma y color a tus pestañas. A diferencia de las extensiones, el lifting modifica la forma y el color de tus pestañas naturales sin agegar pegamentos o productos irritantes </p>
                    <p>Así logras el efecto de pestañas más gruesas, oscuras y de aspecto más largo.</p>
                </div>
                <br />
                <div>
                  <h2>¿Cómo se hace?</h2>
                  <p className='parrafoServicios'>En una sesión de 90 minutos primero se higieniza la zona, luego colocamos dos pasos de tratamiento que hidratan la pestaña., fijan la forma y la suaviza.</p>
                  <p>Luego colocamos henna para teñirlas. Finalmente, para una mayor hidratación y para mantener saludable el vello, aplicamos botox y keratina</p>
                  <p>Siempre recomendamos realizarlo junto con el servicio de Diseño y Perfilado de cejas para un resultado óptimo.</p>
                </div> 
                <div>
                  <p><b>- Indoloro: </b> es una técnica indolora no invasiva que actúa superficialmente, por lo cual no genera molestia ni dolor durante o después de realizado</p>
                  <p><b>- Corrige imperfecciones:</b> : aunque está indicado para las pestañas más caídas, puede realizarlo cualquier persona que busque este efecto con un resultado muy natural y de brillo en la cara.</p>
                  <p><b>Durabilidad:</b> el efecto se mantiene por 4 a 6 semanas, y luego va desapareciendo paulatinamente, por lo cual no requiere un mantenimiento si optás por desistir del efecto. Podes optar por mantenerlo con retoques cada 5 semanas.</p>
                </div>
            </div>}  
          </div>
        </div>
      </div>
    </section>
    <section id='nails'>
      <div className='servicio'>
         <div className='servicioCarousel'>
          <Carousel />
        </div>
        <div className='servicioInfo'>
          <h1>MUD Pro Nails</h1>
          <div className='servicioBotones'>
            <button>Manicuría combinada</button>
            <button>Manicuría combinada con esmaltado tradicional/semipermanente</button>
            <button>Capping gel</button>
            <button>Press on nails</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Servicios