import React from 'react'

const Dropdown = () => {
  return (
    <div className='dropDown'>
        <div className="dropDownBtn">
            MUD Academy
        </div>
        <div className='dropDownContent'>
            <div className='dropDownItem'>Carrera de maquillaje profesional</div>
            <hr />
            <div className='dropDownItem'>Curso de maquillaje social</div>
            <hr />
            <div className='dropDownItem'>Taller de laminado de cejas</div>
            <hr />
            <div className='dropDownItem'>Taller de divfting + nutricion + tinte</div>
            <hr />
            <div className='dropDownItem'>Taller de disenio de cejas + henna</div>
            <hr />
            <div className='dropDownItem'>Curso de peinados</div>
            <hr />
            <div className='dropDownItem'>Taller de trenzas</div>
        </div>
    </div>
  )
}

export default Dropdown