import React from 'react'
import './sobrenosotros.css'
import CardStaff  from './CardStaff'


const SobreNosotros = () => {
  return (
    <div className='sobreNosotrosContainer'>
      <div className="sobreNosotros1">
        <div className='imgFondo'>
          <img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" className='imgFondo1'alt="imgSobreNosotros" />
          <img src="https://i.postimg.cc/8Pjwc3xx/IMG-6398-1.png" className='imgFondo2' alt="imgNosotros2" />
        </div>
        <div className='tituloSobreNosotros'>
          <h1>"Como maquilladora pude alcanzar los sucesos más importantes, tapas de revistas, los desfiles de moda más importantes, celebrities."</h1>
        </div>
      </div>
      <div className='textosMotivacionalesSNContainer'>
        <h1>Hace más de 20 años que tengo como profesión mi pasión. La historia empezó mucho antes, desde muy pequeña jugando con los maquillajes de mi mamá y soñando con ser una artsita del make up.</h1>
        <h1>Me formé con grandes artistas nacionales e internacionales, y hace 7 años que me capacito en el exterior en las academias más prestigiosas del mundo.</h1>
      </div>
      <div className="historiaSN1"> 
        <h1 className='historiaSN1Item1'>Celeste Gonzales</h1>
        <img src="https://i.postimg.cc/RCfvWXXR/61-de40b12e563144010116591215845626-480-0.jpg" className='historiaSN1Item2 imgCeles1' alt="imgSobreNosotros3" />
        <div className='historiaSN1Item3'>
          <p>MUD nació hace 15 años como un proyecto creativo de Celeste González, directora de la compañía.</p>
          <p>Su carrera comenzó hace 20 años, tuvo sus inicios en las grandes compañías de cosmética internacional tales como Natura y Lancome. Luego de unos años en compañías internacioles y fortalecer su carrera profesional maquillallando en producciones, desfiles y a grandes figures del espectáculo a nivel internacional nació MUD.</p>
          <p>Cuenta con un sinfín de cursos y seminarios a nivel internacional que avalan su expertise en el área, trabajo con grandes fotógrafos, diseñadores y estilistas de talla internacional.</p>
          <p>Entre su portafolio se encuentras figuras como: Sofía Zámolo, Julieta Prandi, Paula Chaves, Zaira Nara, Barbie Vélez.</p>
        </div>
        <img src="https://i.postimg.cc/66C6Tt0q/6.jpg" className='historiaSN1Item4 imgCeles2' alt="imgSobreNosotros4" />
      </div>
      <div className="mudAnimadoNosotros">
        <p>MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD MUD</p>
      </div>
      <div className='historiaSN2'>
        <img src="https://i.postimg.cc/RCfvWXXR/61-de40b12e563144010116591215845626-480-0.jpg" alt="imgSobreNosotros3" />
        <p>MUD comenzó con la educación como eje principal para formar profesionales calificados para trabajar en una industria competitiva. Sumado a sus academias, MUD cuenta con tiendas en donde se realizan servicios de belleza.</p>
        <p>El último proyecto de MUD es el lanzamiento de su propia línea de labiales y esmaltes diseñados especialmente por la directora de MUD respetando altos estándares internacionales, los cuales se comercializan en sus tiendas físicas y se distribuyen a todo el país a través de tu e-comerce.</p>
      </div>
      <div className="cardsStaffContainer">
        <h1>Nuestro Staff</h1>
        <div className='cardsStaff'>
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
        </div>
        <div className='cardsStaff'>
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
        </div>
      </div>
    </div>

  )
}

export default SobreNosotros