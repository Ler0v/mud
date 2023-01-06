import React from 'react'
import './arrayFotos.css'
import Imagen from './ArrayContenedorFotos'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
            faCircleChevronLeft,
            faCircleChevronRight,
            faCircleXmark
        } 
from '@fortawesome/free-solid-svg-icons';


const ArrayFotos = () => {

    const [openModal, setOpenModal] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleModal = (index) => {   
        setSlideNumber(index)
        setOpenModal(true)
    }


    const handleCloseModal = () => {   
        setOpenModal(false)
    } 

    const prevSlide = () => {   
        slideNumber === 0 
        ? setSlideNumber(Imagen.length -1)
        : setSlideNumber(slideNumber - 1)
    }
    const nextSlide = () => {   
        slideNumber + 1 === Imagen.length 
        ? setSlideNumber(0)
        : setSlideNumber(slideNumber + 1)
    }        

  return (
    <>

        {openModal &&
            <div className='sliderWrap'>
                <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
                <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
                <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>
                <div className='fullScreenImage'>
                    <img src={Imagen[slideNumber].img} alt="imgFullscreen"  />
                </div>
            </div>
        }
        
        <h1 className='titulo'>Nuestros Trabajos</h1>
        <div className="slider" >

            <div className="slider-track">
                

                {
                    Imagen && Imagen.map((Imagen, index) => {
                       return(
                            <div className="fotosMovimiento" 
                                onClick={ ()=> handleModal(index)} 
                            >
                                <img src={Imagen.img} alt="trabajos" className='imgGaleria' />
                            </div>
                        )
                    })
                }


            </div>

        </div>
    
    </>
  )
}

export default ArrayFotos

{/* /* fotosMovimiento 2 */}
                


                 {/* <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g1" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img2} className='imgGaleria' alt="g2" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img3} className='imgGaleria' alt="g3" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g4" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g5" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g6" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g7" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g8" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g9" />
                </div>

                

                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g10" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img2} className='imgGaleria' alt="g11" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img3} className='imgGaleria' alt="g12" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g13" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g14" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g15" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g16" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g17" />
                </div>
                <div className='fotosMovimiento' onClick={ ()=> handleModal()}>
                    <img src={Imagen.img1} className='imgGaleria' alt="g18" />
                </div> */}
