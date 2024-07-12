import React, { useState, useEffect } from 'react';
import '../styles/carrusel.css'; 

import python from '../assets/img/python.svg'; 
import javascript from '../assets/img/javascript.svg';
import css from '../assets/img/css.svg';
import html from '../assets/img/html.svg';

const palabras = [

  { palabra: 'CSS', imagen: css },
  { palabra: 'HTML', imagen: html },
  { palabra: 'Java', imagen: javascript },
  { palabra: 'Python', imagen: python }
];

export const Carrusel = () => {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndice((indice + 1) % palabras.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [indice]);

  return (
    <div className="carrusel-container">
      <div className="carrusel-item">
        {palabras.map((item, index) => (
          <div key={index} className={index === indice ? 'active carrusel-word' : 'carrusel-word'}>
            <span>{item.palabra}</span>
            <img src={item.imagen} alt={item.palabra} className="carrusel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};
