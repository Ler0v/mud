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
          initial={{x: -200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:2}}>
            <div className='servicioGuia'>
              <p className='tituloItem'>PRO MAKEUP & HAIRSTYLE</p>
              <button><a href="#proMakeup">Ver mas</a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem2"
          initial={{x: 200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:2}}
          >
            <div className='servicioGuia'>
              <p className='tituloItem'>Cejas</p>
              <button><a href="#cejas">Ver mas</a></button>
            </div>
          </motion.div>
          <motion.div className="serviciosContainerItem3"
          initial={{x: -200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:2}}
          >
            <div className='servicioGuia'>
                <p className='tituloItem'>Pestanias</p>
                <button><a href="#pestanias">Ver mas</a></button>
              </div>
          </motion.div>
          <motion.div className="serviciosContainerItem4"
          initial={{x: 200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:2}}
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
          <h1>Pro Make Up & Hairstyle</h1>
          <div className='servicioBotones'>
            <button className='botonServicio' onClick={()=> setInfo("El servicio estrella de MUD. Nos dedicamos hace mas de 13 años a resaltar la belleza natural de las personas a través del arte del maquillaje. Nuestro objetivo es hacerte sentir bella, cómoda y natural. Utilizamos productos de primeras marcas, importados y nacionales, y las técnicas más novedosas y trend de la industria. Si tenes un evento en el cual queres lucirte, elegí maquillarte con profesionales capacitadas, elegi MUD.")}>Pro Makeup</button>
            <button onClick={()=> setInfo("Elegí tu Make-up ArtistEn MUD te ofrecemos dos opciones:Maquillaje con Staff: contamos con un staff de artistas del maquillaje altamente capacitadas/os, quienes se perfeccionan constantemente y cuentan con las más novedosas técnicas y productos del mercado.")}>Bodas</button>
            <button>15 Años</button>
            <button>Pro Hairstyle</button>
          </div>
          <div className='infoServicios'>
            {info}
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
            <button>Full Brows Design</button>
            <button>Brow Service</button>
            <button>Brow Lamination</button>
            <button>Brow Tint</button>
            <button>Hair Botox Revitalize</button>
            <button>Microblading</button>
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