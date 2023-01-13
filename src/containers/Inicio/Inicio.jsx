import React from 'react'
import './inicio.css'
import videoInicio from '../../assets/videoInicio.mp4'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const animacionOnScreen = {
  offScreen: {opacity:0}, 
  onScreen: {opacity:1}
}


const Inicio = () => {
  return (
    <>
      <div className='videoBody'>
        <motion.video className='videoBodyItem' src={videoInicio} autoPlay loop muted
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true}}
          transition={{duration:2}}
          variants={animacionOnScreen}
        />
      </div>
      <div className='cardsBodyContainer'>
        <motion.h1
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true,amount:0.7}}
          transition={{duration:2}}
          variants={animacionOnScreen}
        className='tituloCardsBody'>¿Por que MUD?</motion.h1>
        <motion.div className="cardsBody"
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once: true,amount:0.5}}
          transition={{duration:2}}
          variants={animacionOnScreen}
        >
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestros servicios</h1>
            <Link to='/servicios'><motion.img
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1}}            
            src="https://i.postimg.cc/Kv0vyGFs/IMG-1265.jpg" className='card1' alt="imgB1" /></Link>
          </div>
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestras carreras</h1>
            <Link to='/academia'><motion.img 
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1}}  
            src="https://i.postimg.cc/C1pw4dHd/IMG-3807.jpg" className='card2' alt="imgB2" /></Link>
          </div>
          <div className='cardBodyContainer'>
            <h1 className='letraIndex'>Nuestros productos</h1>
             <Link to='/productos'><motion.img
              initial={{scale:1}}
              whileHover={{scale:1.1}}
              transition={{duration:1}}  
             src="https://i.postimg.cc/fTsnq69q/1edit.jpg" className='card3' alt="imgB3" /></Link>
          </div>     
        </motion.div>
      </div>
      <div className="aboutIndex">
        <motion.img src="https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg" alt="aboutIndexfoto"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true,amount:0.5}}
        transition={{duration:3}}
        />
        <div className='aboutIndexInfo'>
          <h1>Nuestros trabajos</h1>
          <p>Mira nuestro portafolio donde se encuentran figuras como: Sofía Zámolo, Julieta Prandi, Paula Chaves, Zaira Nara, Barbie Vélez y mas!</p>
          <Link to='/trabajos'><button className='botonInicio'>Ver Trabajos</button></Link>
        </div>
      </div>
      <div className='contactoInicioContainer'>
        <div className='contactoInicioInfo'>
            <p>Contactanos!</p>
            <div className='botonesContacto'>
              <a href="https://api.whatsapp.com/send/?phone=5491135918596&text&type=phone_number&app_absent=0"><img src="https://i.postimg.cc/Vv4K8x3q/icons8-whatsapp-30.png"  className='botonesContactoImg' alt="contactoInicio"  /></a>
              <a href="mailto:info@makeupdesign.com.ar"><img src="https://i.postimg.cc/Pxv8jJqb/icons8-mail-30.png"  className='botonesContactoImg' alt="contactoInicio"  /></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Inicio