import React from 'react'
import  ArrayFotos  from '../../components/GaleriaTrabajos/ArrayFotos'
import './trabajos.css'

const Trabajos = (img) => {
  return (
    <div>
        <h1>Trabajos</h1>
        <div>
            <ArrayFotos img={img} />
        </div>
    </div>
  )
}

export default Trabajos