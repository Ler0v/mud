import React from 'react'
import './infoAcademia.css'

const infoAcademia = ({imagen, titulo, info1, info2, info3, info4, info5, info6, info21, info22, banner1, banner2,banner3, bannerInfo, bannerInfo2, bannerInfo3, bannerInfo4, bannerInfo5, bannerInfo21, bannerInfo22, bannerInfo23, bannerInfo24, bannerInfo25, bannerInfo26, bannerInfo27, bannerInfo28, bannerInfo31, bannerInfo32, bannerInfo33, bannerInfo34, bannerInfo35, bannerInfo36}) => {
  return (
         <>
            <div className='seccionUno'>
                <h1 className='tituloCarrera'>{titulo}</h1>
                <div className='headerAcademy'>
                  <img className='headerImg' src={imagen} alt="imgacademy" />
                  <div className='infoAcademy'>
                    <ul className='listaAcademy'>
                      <li className='infoAcademyItems'>{info1}</li>
                      <li className='infoAcademyItems'>{info2}</li>
                      <li className='infoAcademyItems'>{info3}</li>
                      <li className='infoAcademyItems'>{info4}</li>
                      <li className='infoAcademyItems'>{info5}</li>
                      <li className='infoAcademyItems'>{info6}</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className='seccionDos'>
              <div className='tituloTexto'>
                <p>{info21}</p>
                <p>{info22}</p>
              </div>
              <div className='banners'>
                <div className='bannerInfo'>
                  <h1>{banner1}</h1>
                  <ul>
                    <li>{bannerInfo}</li>
                    <li>{bannerInfo2}</li>
                    <li>{bannerInfo3}</li>
                    <li>{bannerInfo4}</li>
                    <li>{bannerInfo5}</li>
                  </ul>
                </div>
                <div className='bannerInfo'>
                  <h1>{banner2}</h1>
                  <ul>
                    <li>{bannerInfo21}</li>
                    <li>{bannerInfo22}</li>
                    <li>{bannerInfo23}</li>
                    <li>{bannerInfo24}</li>
                    <li>{bannerInfo25}</li>
                    <li>{bannerInfo26}</li>
                    <li>{bannerInfo27}</li>
                    <li>{bannerInfo28}</li>
                  </ul>
                </div>
                <div className='bannerInfo'>
                  <h1>{banner3}</h1>
                  <ul>
                    <li>{bannerInfo31}</li>
                    <li>{bannerInfo32}</li>
                    <li>{bannerInfo33}</li>
                    <li>{bannerInfo34}</li>
                    <li>{bannerInfo35}</li>
                    <li>{bannerInfo36}</li>
                  </ul>
                </div>
               </div>
            </div> 
        </>
  )
}

export default infoAcademia