import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className='footerContainer'>
          <h2 className='footerTitulo1'>Contactate con nosotros!</h2>
          <div className='footerInfo'>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/Vv4K8x3q/icons8-whatsapp-30.png" alt="wacontacto" />
              <p>+54 911 3591 8596</p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/8kKwKH46/icons8-phone-30.png" alt="telcontacto" />
              <p>(011) 1135918596 </p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/Pxv8jJqb/icons8-mail-30.png" alt="mailcontacto" />
              <p>info@makeupdesign.com.ar</p>
            </div>
          </div>  
          <div className='footerInfo'>
            <h2 className='footerTitulo2'>Encontranos en</h2>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto" />
              <p>MUD Store Quilmes Brown 503.</p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto2" />
              <p>Palermo CABA Studio privado
              (Con cita previa) </p>
            </div>
          </div>
          <div className='footerHorario'>
            <h2>Nuestros horarios de atencion</h2>
            <p>Lunes a Sábados</p>
            <p>de 10 a 19hs</p>
         </div>
        <div className='footerRedes'>
          <img src="https://i.postimg.cc/0yht1WdL/icons8-instagram-30.png" className='imgFooter' alt="ig" />
          <img src="https://i.postimg.cc/YShhYR5q/icons8-facebook-30.png" className='imgFooter' alt="face" />
        </div>
          <h3 className='footerEnd'>© 2022 - MUD - Todos los derechos reservados</h3>
        </div>
        
    </>
  )
}

export default Footer