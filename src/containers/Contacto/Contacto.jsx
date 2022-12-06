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
          <p className='infoContacto'>¿Tenes alguna duda? Dejanos un mensaje y con gusto la responderemos lo antes posible.</p>
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
                  <option value="Pro Hairstyle">Pro Hairstyle</option>
                  <option value="Hair Botox Revitalize">Hair Botox Revitalize</option>
                </select>
                <label> Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="6"></textarea>
                <button>Enviar</button>
              </form>
            </div>
         </div>
      </div>
      
    </>
  )
}

export default Contacto