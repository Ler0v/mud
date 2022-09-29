import React from 'react'
import './servicios.css'
import Carousel from './Carousel'


const Servicios = () => {
  return (
    <>
    <div className='serviciosContainer'>
      <h1 className='serviciosTitulo'>Servicios</h1>
      <div className='serviciosContainerItem'> 
        <div className="serviciosContainerItem1">
          <div className='servicioGuia'>
            <p className='tituloItem'>PRO MAKEUP & HAIRSTYLE</p>
            <button>Ver mas</button>
          </div>
        </div>
        <div className="serviciosContainerItem2">
          <div className='servicioGuia'>
            <p className='tituloItem'>Cejas</p>
            <button>Ver mas</button>
          </div>
        </div>
        <div className="serviciosContainerItem3">
          <div className='servicioGuia'>
              <p className='tituloItem'>Pestanias</p>
              <button>Ver mas</button>
            </div>
        </div>
        <div className="serviciosContainerItem4">
          <div className='servicioGuia'>
              <p className='tituloItem'>MUD PRO NAILS</p>
              <button>Ver mas</button>
            </div>
        </div>
      </div>
    </div>
    <div className='servicio'>
      <div className='servicioCarousel'>
        <Carousel />
      </div>
      <div className='servicioInfo'>
        <h1>Pro Make Up & Hairstyle</h1>
        <div className='servicioBotones'>
          <button>Pro Makeup</button>
          <button>Bodas</button>
          <button>15 Años</button>
          <button>Pro Hairstyle</button>
        </div>
      </div>
    </div>
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
    </>
  )
}

export default Servicios