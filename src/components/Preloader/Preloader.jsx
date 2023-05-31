import React from 'react';
import './preloader.css';
import {motion} from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div className="preloader preloader-animation"
      initial={{ opacity:0}}
      animate={{opacity:1}}
      transition={{duration:3}}
    >
      <img src="https://i.postimg.cc/jdxTcZ4g/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-2.png" alt="Cargando..." />
      <div className="preloader-animation"></div>
      <h3>Cargando...</h3>
    </motion.div>
  );
};

export default Preloader;