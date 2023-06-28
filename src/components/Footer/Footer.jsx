import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footerContainer'>
        <div className="footerItem1">
          <div className='footerInfo'>
            <h2 className='tituloF1'>Contactate con nosotros!</h2>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/Vv4K8x3q/icons8-whatsapp-30.png" alt="wacontacto" />
              <p className='itemCentrado'>+54 911 3591 8596</p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/8kKwKH46/icons8-phone-30.png" alt="telcontacto" />
              <p className='itemCentrado'>(011) 1135918596 </p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/Pxv8jJqb/icons8-mail-30.png" alt="mailcontacto" />
              <p>info@makeupdesign.com.ar</p>
            </div>
          </div>  
        </div>
        <div className="footerItem2">
          <div className='footerInfo'>
            <h2 className='footerTitulo2'>Encontranos en</h2>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto" />
              <p>MUD Store Quilmes Brown 503.</p>
            </div>
            <div className='footerItem'>
              <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto2" />
              <p>Palermo CABA Studio privado
              (Con cita previa)</p>
            </div>
          <div className='footerItem'>
            <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto2" />
            <p>MUD Ituzaingó Juncal 186</p>
          </div>
          <div className='footerItem'>
            <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="mapacontacto2" />
            <p>Nuestros horarios de atencion Lunes a Sábados de 10 a 19hs</p>
          </div>
          </div>
        </div>
      </div>
        <div className='footerRedes'>
          <a href="https://www.instagram.com/mudmakeupdesign/"><img src="https://i.postimg.cc/0yht1WdL/icons8-instagram-30.png" className='imgFooter' alt="ig" /></a>
          <a href="https://www.facebook.com/mudmakeupdesign"><img src="https://i.postimg.cc/YShhYR5q/icons8-facebook-30.png" className='imgFooter' alt="face" /></a>
        </div>
        <h3 className='footerEnd'>© 2022 - MUD - Todos los derechos reservados</h3>
    </>
  )
}

export default Footer