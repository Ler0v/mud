import React from 'react'
import './contacto.css'

const Contacto = () => {
  return (
    <>
      <div className='contactoContainer'>
          <h1 className='Titulo'>Contacto</h1>
          <p className='infoContacto'>¿Tenes alguna duda? Dejanos un mensaje y con gusto la responderemos lo antes posible.</p>
         <div className='contactoFormContainer'>
            <div >
              <img src="https://i.postimg.cc/26yw1C36/IMG-1185.jpg" alt="fotoContacto" />
            </div>
            <div>
              <form className='formContainer'>
                <div className='formJunto'>
                  <div className='formAbajo'>
                    <label> Nombre </label>
                    <input type="text" />
                  </div>
                  <div className='formAbajo'>
                    <label> Apellido </label>
                    <input type="text" />
                  </div>
                </div>
                <label> Email </label>
                <input type="email" />
                <label> Telefono de contacto </label>
                <input type="tel" />
                <label>Motivo de contacto</label>
                <select name="servicio" id="servicio">
                  <option value="makeup">Pro Makeup</option>
                  <option value="makeup">Bodas</option>
                  <option value="makeup">15 Años</option>
                  <option value="hairstyle">Pro Hairstyle</option>
                  <option value="hayrstyle">Hair Botox Revitalize</option>
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