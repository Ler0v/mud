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
              <p className='tituloItem'>PRO MAKEUP & HAIRSTYLE</p>
              <button><a href="#proMakeup">Ver mas</a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem2"
          initial={{y: +200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:2}}
          >
            <div className='servicioGuia'>
              <p className='tituloItem'>Cejas</p>
              <button><a href="#cejas">Ver mas</a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem3"
          initial={{y: +200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:3}}
          >
            <div className='servicioGuia'>
                <p className='tituloItem'>Pestanias</p>
                <button><a href="#pestanias">Ver mas</a></button>
              </div>
          </motion.div>
          <motion.div className="serviciosContainerItem4"
          initial={{y: 200, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration:3}}
          >
            <div className='servicioGuia'>
                <p className='tituloItem'>MUD PRO NAILS</p>
                <button><a href="#nails">Ver mas</a></button>
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
          <h1>Pro Make Up</h1>
          <div className='servicioBotones'>
            <button className='botonServicio' onClick={()=> setInfo("Pro Makeup")}>Pro Makeup</button>
            <button onClick={()=> setInfo("Bodas")}>Bodas</button>
            <button onClick={()=> setInfo("15 Años")}>15 Años</button>
            <button>Pro Hairstyle</button>
          </div>
          <div className='infoServicios'>
            {info === 'Pro Makeup' && 
            <div>
              <h1>El servicio estrella de MUD</h1>
              <p>Nos dedicamos hace mas de 13 años a resaltar la belleza natural de las personas a través del arte del maquillaje.
              Nuestro objetivo es hacerte sentir bella, cómoda y natural.</p>
              <p>Utilizamos productos de primeras marcas, importados y nacionales, y las técnicas más novedosas y trend de la industria. Si tenes un evento en el cual queres lucirte, elegí maquillarte con profesionales capacitadas, elegi MUD.</p>
              <h3>
                En MUD te ofrecemos dos opciones:
              </h3>
              <ul>
                <li>Maquillaje con Staff: contamos con un staff de artistas del maquillaje altamente capacitadas/os, quienes se perfeccionan constantemente y cuentan con las más novedosas técnicas y productos del mercado. Capacitadas por la directora de MUD. Maletín con productos variados de excelente calidad (importados, nacionales y MUD Cosmetics).</li>
                <li>Maquillaje con Celeste Gonzales, directora de MUD: con más de 20 años de trayectoria, se capacito en las academias internacionales más prestigiosas del mundo, y cuenta con un maletin 100% importado, con marcas internacionales como Lancome, Make Up Forever, MAC, Dior, Givenchy, Chanel, Anastasia Beverly Hills, Natasha Denona, Kryolan, entre otras.</li>
              </ul>
              <h2>Ventajas</h2>
              <ul>
                <li>Utilizamos los mejores productos: invertimos en productos de la más altísima calidad para nuestro maletín, para obtener los mejores resultados</li>
                <li>Máxima durabilidad: dejarte en manos de las profesionales MUD te garantizará un maquillaje intacto por hasta 10 horas. Conocemos los mejores trucos: sabemos implementar las técnicas más novedosas y que están en tendencia.</li>
                <li>Optimizamos tu tiempo: al acudir a un gran evento, siempre hay muchos preparativos. Aunque sepas manejarte, puede que los nervios te jueguen una mala pasada y tengas que desmaquillarte y comenzar de cero. En MUD realizaremos todo el trabajo por vos, asegurando un resultado impecable.</li>
                <li>Lucirás radiante en las fotos: hoy en día con la tecnología existente las cámaras que se utilizan en eventos no bajan de resoluciones como 4K, Ultra HD, y hasta 8K, donde hasta el más mínimo detalle se nota. Con un maquillaje profesional te aseguras de lucir impecable tanto en persona como a través de las cámaras.</li>
              </ul>
            </div>}  
            {info === "15 Años" && <div>
              <h1>hola</h1>
              <ul>
                <li>hola</li>
                <li>chau</li>
              </ul>
              </div>}
            {info === 'Bodas' && <div>
              <h2>Elegí tu Make-up ArtistEn MUD te ofrecemos dos opciones:Maquillaje con Staff: contamos con un staff de artistas del maquillaje altamente capacitadas/os, quienes se perfeccionan constantemente y cuentan con las más novedosas técnicas y productos del mercado.</h2>
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
            <button className='botonServicio' onClick={()=> setInfo("fullBrow")}>Full Brows Design</button>
            <button>Brow Service</button>
            <button>Brow Lamination</button>
            <button>Brow Tint</button>
            <button>Hair Botox Revitalize</button>
            <button>Microblading</button>
          </div>
          <div className="serviciosInfo">
            {info === 'fullBrow' && <div>
              <h1>El servicio estrella de MUD</h1>
              <p>Nos dedicamos hace mas de 13 años a resaltar la belleza natural de las personas a través del arte del maquillaje.
              Nuestro objetivo es hacerte sentir bella, cómoda y natural. Utilizamos productos de primeras marcas, importados y nacionales, y las técnicas más novedosas y trend de la industria. Si tenes un evento en el cual queres lucirte, elegí maquillarte con profesionales capacitadas, elegi MUD.</p>
              <h3>
                En MUD te ofrecemos dos opciones:
              </h3>
              <ul>
                <li>Maquillaje con Staff: contamos con un staff de artistas del maquillaje altamente capacitadas/os, quienes se perfeccionan constantemente y cuentan con las más novedosas técnicas y productos del mercado. Capacitadas por la directora de MUD. Maletín con productos variados de excelente calidad (importados, nacionales y MUD Cosmetics).</li>
                <li>Maquillaje con Celeste Gonzales, directora de MUD: con más de 20 años de trayectoria, se capacito en las academias internacionales más prestigiosas del mundo, y cuenta con un maletin 100% importado, con marcas internacionales como Lancome, Make Up Forever, MAC, Dior, Givenchy, Chanel, Anastasia Beverly Hills, Natasha Denona, Kryolan, entre otras.</li>
              </ul>
              <h2>Ventajas</h2>
              <ul>
                <li>Utilizamos los mejores productos: invertimos en productos de la más altísima calidad para nuestro maletín, para obtener los mejores resultados</li>
                <li>Máxima durabilidad: dejarte en manos de las profesionales MUD te garantizará un maquillaje intacto por hasta 10 horas. Conocemos los mejores trucos: sabemos implementar las técnicas más novedosas y que están en tendencia.</li>
                <li>Optimizamos tu tiempo: al acudir a un gran evento, siempre hay muchos preparativos. Aunque sepas manejarte, puede que los nervios te jueguen una mala pasada y tengas que desmaquillarte y comenzar de cero. En MUD realizaremos todo el trabajo por vos, asegurando un resultado impecable.</li>
                <li>Lucirás radiante en las fotos: hoy en día con la tecnología existente las cámaras que se utilizan en eventos no bajan de resoluciones como 4K, Ultra HD, y hasta 8K, donde hasta el más mínimo detalle se nota. Con un maquillaje profesional te aseguras de lucir impecable tanto en persona como a través de las cámaras.</li>
              </ul>
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
          <h1>Pestanias</h1>
          <div className='servicioBotones'>
            <button>Lash Lifting</button>
            <button>Hair Botox Revitalize</button>
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