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
          <motion.img src="https://i.postimg.cc/q7pM9V1H/Academy-stories-1.png" className='imgFondo2' alt="imgNosotros2" 
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
          >Creo que VOS podes hacer que las cosas sucedan.</motion.h1>
        </div>
      </div>
      <div className='textosMotivacionalesSNContainer'>
        <motion.h1
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}
        >Desde muy pequeña jugaba con maquillajes de mi mama y soñaba con ser
        una artista del make-up.</motion.h1>
        <motion.h1
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}
        >Aunque me encantaba sonar, y lo sigo haciendo, pasar a la acción fue la
        clave para materializar mis sueños.</motion.h1>
      </div>
      <div className="historiaSN1"> 
        <motion.h1 className='historiaSN1Item1'
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{once:true,amount:0.5}}
          transition={{duration:2}}
          variants={textAnimation}>Celeste Gonzalez</motion.h1>
        <motion.img src="https://i.postimg.cc/XJCKX4NZ/Screenshot-20230418-200615.png" className='historiaSN1Item2 imgCeles1' alt="imgSobreNosotros3"
        initial={{x: -200}}
        whileInView={{x:150, amount:0.3}}
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
          <motion.p>Con esfuerzo busque cursos, decidí formarme y meterme en un mundo donde lo que para muchos era un juego, para mi era mi pasión.</motion.p>
          <motion.p>Logre estar al lado de estrellas internacionales, trabajar para las mejores marcas y medios y aprender de titanes de la industria.</motion.p>
          <motion.p>Ahora mi sueño es acercar esta posibilidad a través de mi experiencia, mi conocimiento y mis aprendizajes a quienes También amen hacer el mundo un lugar mas bello con el maquillaje</motion.p>
        </motion.div>
        <motion.img src="https://i.postimg.cc/66C6Tt0q/6.jpg" className='historiaSN1Item4 imgCeles2' alt="imgSobreNosotros4" 
        initial={{x:400}}
        whileInView={{x:0, amount:0.3}}
        viewport={{once:true}}
        transition={{duration: 4}}
        />
      </div>
      <div className='historiaSN2'>
        <motion.img src="https://i.postimg.cc/SR66Npb7/IMG_0531.jpg" alt="imgSobreNosotros3"
         initial={{x: -200}}
         whileInView={{x:0,amount:0.4}}
         transition={{duration: 3}} />
        <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        variants={textAnimation}
        >Te quiero compartir todo lo que aprendí haciendo , tapas de revistas, desfiles
        de moda internacionales y maquillando celebridades. Bienvenid@ a este hermoso mundo de belleza, arte, creación... bienvenidas
        futuras colegas y artistas, somos un equipo!.Me acompañan en este desafío hombres y mujeres que se formaron en MUD y crecieron dentro de la compañía. Te invito a sumarte.</motion.p>
      </div>  
    </div>

  )
}

export default SobreNosotros

{/* <div className="cardsStaffContainer">
        <h1>Nuestro Staff</h1>
        <motion.h3
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        variants={textAnimation}
        >Conoce al equipo</motion.h3>
        <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        viewport={{once:true, amount:0.5}}
        variants={textAnimation}
        >Y hacer una presentación con foto , cargo y una frase que defina a cada una pero tenga que ver con algo personal.</motion.p>
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
            nombre={'Celeste González'}
            descripcion={"CEO & Profesional Make Up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://makeupdesign.com.ar/img/nosotros/celeste.jpg'}
            nombre={'Camila Pereira'}
            descripcion={"Brow & Lash Expert & Pro Make Up artist"}
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
            nombre={'Emanuel Luna'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://makeupdesign.com.ar/img/nosotros/celeste.jpg'}
            nombre={'Aldana Suarez'}
            descripcion={"Directora Microbaling especialist and Make up artist"}
          />
          <CardStaff
            className='cardStaffItem' 
            imagenStaff={'https://i.postimg.cc/zGPWMDtQ/IMG-6398.jpg'}
            nombre={'Anabela Chuquel'}
            descripcion={"Microbaling especialist and Make up artist"}
          />
        </motion.div>
      </div> */}