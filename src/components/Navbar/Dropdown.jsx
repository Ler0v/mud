import React from 'react'
import { useState } from 'react'


const Dropdown = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className='dropDown'>
        <div className="dropDownBtn" onClick={() => setOpen(!open)}>
            MUD Academy
        </div>
        <div className={`dropDownContent ${open? 'active' : 'inactive'}`}>
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