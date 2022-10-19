import React from 'react'
import './cardstaff.css'

const CardStaff = ({imagenStaff, nombre, descripcion,   }) => {
  return (
    <>
        <div className='cardContainer'>
            <img src={imagenStaff} alt="imgStaff" />
            <div className='cardTextContainer'>
                <p>{nombre}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    </>
  )
}

export default CardStaff