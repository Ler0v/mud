import React from 'react'
import './contacto.css'
import emailjs from '@emailjs/browser'

const Contacto = () => {

  
  const sendMail = (event) => {
    emailjs.sendForm('service_raly6as','template_c18fzit',event.target,'uo0UMj1yjJXx9ziY3')
    .then (response => console.log(response))
    .catch(error =>console.log(error))
    alert('El formulario fue enviado correctamente, en breve nos vamos a poner en contacto con vos!')
  }

  return (
    <>
      <div className='contactoContainer'>
          <h1 className='Titulo'>Contacto</h1>
          <p className='infoContacto'>Tu consulta es nuestra prioridad, dejanos un mensaje y con gusto la responderemos lo antes posible.</p>
         <div className='contactoFormContainer'>
            <div className='fotoContacto'>
              <img src="https://i.postimg.cc/26yw1C36/IMG-1185.jpg" alt="fotoContacto" />
            </div>
            <div>
              <form className='formContainer' onSubmit={sendMail}>
                <div className='formJunto'>
                  <div className='formAbajo'>
                    <label> Nombre </label>
                    <input type="text" name='nombre' />
                  </div>
                  <div className='formAbajo'>
                    <label> Apellido </label>
                    <input type="text" name='apellido' />
                  </div>
                </div>
                <label> Email </label>
                <input type="email" name='email' />
                <label> Telefono de contacto </label>
                <input type="tel" name='telefono' />
                <label>Motivo de contacto</label>
                <select name="servicio" id="servicio">
                  <option value="Pro Make Up">Pro Makeup</option>
                  <option value="Bodas">Bodas</option>
                  <option value="15 años">15 Años</option>
                  <option value="Pro Hairstyle">Carrera de maquillaje</option>
                  <option value="Hair Botox Revitalize">Servicios de cejas y pestañas</option>
                </select>
                <label> Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="6"></textarea>
                <button>Enviar</button>
              </form>
            </div>
         </div>
         <div className='mapaContacto'>
            <div className='mapaContactoItem'>
              <a href="https://www.google.com.ar/maps/place/Almte.+Brown+503,+Quilmes,+Provincia+de+Buenos+Aires/@-34.7202279,-58.2597355,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32e3ffbe65c63:0x68322dcd93eb6714!8m2!3d-34.7202323!4d-58.2575468?shorturl=1" target='_blank'>
                <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="" />
                <p>MUD Store Quilmes <br /> Brown 503.</p>
              </a>
            </div>
            <div className='mapaContactoItem'>
              <a href="https://www.google.com.ar/maps/place/Almte.+Brown+506,+Quilmes,+Provincia+de+Buenos+Aires/@-34.7201712,-58.2618392,17z/data=!3m1!4b1!4m5!3m4!1s0x95a32e3fe36831ed:0x49afe507d3699c3a!8m2!3d-34.7201757!4d-58.2573545?shorturl=1" target='_blank'>
                <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="" />
                <p>MUD Academy Quilmes <br /> Brown 506, 1°B.</p>
              </a>
            </div>
            <div className='mapaContactoItem'>
              <a href="https://goo.gl/maps/BfR7u558K3Hx8ZTL6" target='_blank'>
                <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="" />
                <p>MUD Academy + Studio Palermo <br /> Convención 1994 Depto 313.</p>
              </a>
            </div>
            <div className='mapaContactoItem'>
              <a href="https://www.google.com/maps/place/MEF,+Juncal+186,+B1714+Ituzaing%C3%B3,+Provincia+de+Buenos+Aires/@-34.657404,-58.6678334,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbf5f72baff65:0x17219713585764a4!8m2!3d-34.6574084!4d-58.6652585!16s%2Fg%2F11csggff4l" target='_blank'>
                <img src="https://i.postimg.cc/D0WnS4G0/icons8-map-pin-30.png" alt="" />
                <p>MUD Ituzaingó<br /> Juncal 186</p>
              </a>
            </div>
         </div>
      </div>
      
    </>
  )
}

export default Contacto