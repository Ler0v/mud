import React from 'react'
import './sobrenosotros.css'
import CardStaff  from './CardStaff'
import {motion} from 'framer-motion'

const textAnimation = {
  offScreen : { opacity:0},
  onScreen : { opacity:1} 
}


const SobreNosotros = () => {
  return (
    <div className='sobreNosotrosContainer'>
      <div className="sobreNosotros1">
        <div className='imgFondo'>
          <motion.img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imgFondo1'alt="imgSobreNosotros" 
          initial={{x: -200, opacity:0}}
          animate={{x: 0, opacity:1}}
          transition={{duration:2}}
          />
          <motion.img src="https://i.postimg.cc/8Pjwc3xx/IMG-6398-1.png" className='imgFondo2' alt="imgNosotros2" 
          initial={{x: 400,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration: 2}}
          />
        </div>
        <div className='tituloSobreNosotros'>
          <motion.h1
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2}}
          >"Como maquilladora pude alcanzar los sucesos más importantes, tapas de revistas, los desfiles de moda más importantes, celebrities."</motion.h1>
        </div>
      </div>
      <div className='textosMotivacionalesSNContainer'>
        <motion.h1
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}
        >Hace más de 20 años que tengo como profesión mi pasión. La historia empezó mucho antes, desde muy pequeña jugando con los maquillajes de mi mamá y soñando con ser una artsita del make up.</motion.h1>
        <motion.h1
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}
        >Me formé con grandes artistas nacionales e internacionales, y hace 7 años que me capacito en el exterior en las academias más prestigiosas del mundo.</motion.h1>
      </div>
      <div className="historiaSN1"> 
        <motion.h1 className='historiaSN1Item1'
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}>Celeste Gonzales</motion.h1>
        <motion.img src="https://i.postimg.cc/RCfvWXXR/61-de40b12e563144010116591215845626-480-0.jpg" className='historiaSN1Item2 imgCeles1' alt="imgSobreNosotros3"
        initial={{x: -200}}
        whileInView={{x:100, amount:0.3}}
        viewport={{once:true}}
        transition={{duration: 3}}
        />
        <motion.div className='historiaSN1Item3'
        initial={'offScreen'}
        whileInView={'onScreen'}
        viewport={{once:true, amount:0.5}}
        transition={{staggerChildren:1}}
        variants={textAnimation}
        >
          <motion.p>MUD nació hace 15 años como un proyecto creativo de Celeste González, directora de la compañía.</motion.p>
          <motion.p>Su carrera comenzó hace 20 años, tuvo sus inicios en las grandes compañías de cosmética internacional tales como Natura y Lancome. Luego de unos años en compañías internacioles y fortalecer su carrera profesional maquillallando en producciones, desfiles y a grandes figures del espectáculo a nivel internacional nació MUD.</motion.p>
          <motion.p>Cuenta con un sinfín de cursos y seminarios a nivel internacional que avalan su expertise en el área, trabajo con grandes fotógrafos, diseñadores y estilistas de talla internacional.</motion.p>
          <motion.p>Entre su portafolio se encuentras figuras como: Sofía Zámolo, Julieta Prandi, Paula Chaves, Zaira Nara, Barbie Vélez.</motion.p>
        </motion.div>
        <motion.img src="https://i.postimg.cc/66C6Tt0q/6.jpg" className='historiaSN1Item4 imgCeles2' alt="imgSobreNosotros4" 
        initial={{x:400}}
        whileInView={{x:0, amount:0.3}}
        viewport={{once:true}}
        transition={{duration: 4}}
        />
      </div>
      <div className="mudAnimadoNosotros">
        <p>MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD</p>
      </div>
      <div className='historiaSN2'>
        <motion.img src="https://i.postimg.cc/RCfvWXXR/61-de40b12e563144010116591215845626-480-0.jpg" alt="imgSobreNosotros3"
         initial={{x: -200}}
         whileInView={{x:0,amount:0.4}}
         transition={{duration: 3}} />
        <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        variants={textAnimation}
        >MUD comenzó con la educación como eje principal para formar profesionales calificados para trabajar en una industria competitiva. Sumado a sus academias, MUD cuenta con tiendas en donde se realizan servicios de belleza.</motion.p>
        <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        variants={textAnimation}
        >El último proyecto de MUD es el lanzamiento de su propia línea de labiales y esmaltes diseñados especialmente por la directora de MUD respetando altos estándares internacionales, los cuales se comercializan en sus tiendas físicas y se distribuyen a todo el país a través de tu e-comerce.</motion.p>
      </div>
      <div className="cardsStaffContainer">
        <h1>Nuestro Staff</h1>
        <motion.div className='cardsStaff'
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        transition={{duration:2}}
        variants={textAnimation}
        >
          <CardStaff 
            className='cardStaffItem'
            imagenStaff={'https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg'}
            nombre={'Lola Espiro'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://makeupdesign.com.ar/img/nosotros/celeste.jpg'}
            nombre={'Celeste González'}
            descripcion={"Directora Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg'}
            nombre={'Lola Espiro'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
        </motion.div>
        <motion.div className='cardsStaff'
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        transition={{duration:2}}
        variants={textAnimation}
        >
          <CardStaff 
            className='cardStaffItem'
            imagenStaff={'https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg'}
            nombre={'Lola Espiro'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://makeupdesign.com.ar/img/nosotros/celeste.jpg'}
            nombre={'Celeste González'}
            descripcion={"Directora Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg'}
            nombre={'Lola Espiro'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
        </motion.div>
      </div>
    </div>

  )
}

export default SobreNosotros