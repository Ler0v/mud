import React from 'react'
import  ArrayFotos  from '../../components/GaleriaTrabajos/ArrayFotos'
import './trabajos.css'

const Trabajos = (Imagen) => {
  return (
    <div className='trabajosContainer'>
        <div>
            <ArrayFotos Imagen={Imagen} />
        </div>
    </div>
  )
}

export default Trabajos