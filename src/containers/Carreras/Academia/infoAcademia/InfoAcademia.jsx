import React from 'react'
import './infoAcademia.css'

const infoAcademia = ({titulo, info1,info2,info3,info4,info5,info6}) => {
  return (
    <div>
         <>
            <div className='seccionUno'>
                <h1>{titulo}</h1>
                <div>
                  <ul>
                    <li>{info1}</li>
                    <li>{info2}</li>
                    <li>{info3}</li>
                    <li>{info4}</li>
                    <li>{info5}</li>
                    <li>{info6}</li>
                  </ul>
                </div>
            </div>
        </>
    </div>
  )
}

export default infoAcademia