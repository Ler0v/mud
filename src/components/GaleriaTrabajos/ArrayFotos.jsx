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
        
        <h1 className='Titulo'>Nuestros Trabajos</h1>
        <h3 className='titTrabajos'>Conoce nuestros trabajos, si hay maquillaje, esta MUD!</h3>
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
