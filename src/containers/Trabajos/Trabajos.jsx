import React from 'react'
import  ArrayFotos  from '../../components/GaleriaTrabajos/ArrayFotos'
import './trabajos.css'

const Trabajos = (Imagen) => {
  return (
    <div>
        <h1>Trabajos</h1>
        <div>
            <ArrayFotos Imagen={Imagen} />
        </div>
    </div>
  )
}

export default Trabajos