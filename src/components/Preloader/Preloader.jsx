import React from 'react';
import './preloader.css'; // Archivo CSS para estilizar el preloader

const Preloader = () => {
  return (
    <div className="preloader preloader-animation">
      <img src="https://i.postimg.cc/B6MJCSb0/MUD-MAKE-UP-DESIGN-LOGO-BLANCO-Mesa-de-trabajo-1.png" alt="Cargando..." />
      <div className="preloader-animation"></div>
      <h3>Cargando...</h3>
    </div>
  );
};

export default Preloader;