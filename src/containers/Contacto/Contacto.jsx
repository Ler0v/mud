import React from 'react'
import './contacto.css'

const Contacto = () => {
  return (
    <>
      <div className='contactoContainer'>
          <h1 className='Titulo'>Contacto</h1>
          <p className='infoContacto'>¿Tenes alguna duda? Dejanos un mensaje y con gusto la responderemos lo antes posible.</p>
          <form className='formContainer'>
            <div className='formJunto'>
              <label> Nombre </label>
              <label> Apellido </label>
            </div>
            <div className='formJunto'>
              <input type="text" />
              <input type="text" />
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
            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
          </form>
      </div>
      
    </>
  )
}

export default Contacto