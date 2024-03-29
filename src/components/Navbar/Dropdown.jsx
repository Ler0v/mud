import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const Dropdown = ({titulo, texto1, texto2, texto3, texto4, texto5, texto6, texto7}) => {

    const [open, setOpen] = useState(false);
  
    let menuRef = useRef();

    useEffect(() => {
      let handler = (e) => {
        if(!menuRef.current.contains(e.target)){
          setOpen(false)
        }
      };

      document.addEventListener("mousedown", handler)

      return () => {
        document.removeEventListener("mousedown", handler)
      }
    
    })

  return (
    <div className='dropDown'>
        <div className="dropDownBtn" onClick={() => setOpen(!open)} onMouseEnter={()=> setOpen(true)}>
          <Link to='academia'>{titulo}</Link>
        </div>
        {/* <div ref={menuRef} className={`dropDownContent ${open? 'active' : 'inactive'}`} >
            <div className='dropDownItem'  onClick={()=> setOpen(false)}>{texto1}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto2}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto3}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto4}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto5}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto6}</div>
            <hr />
            <div className='dropDownItem' onClick={()=> setOpen(false)}>{texto7}</div>
        </div> */}
    </div>
  )
}

export default Dropdown