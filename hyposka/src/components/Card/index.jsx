import React, { useState } from 'react';
import './style.css';
import dot from './img/dot.svg';

export const Card = (props) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="card">
      <div className="container">
        <img className="dot" src={dot} alt="Tečka" />
        <picture>
          <img className="container__photo" src={props.photo} alt={props.alt} />
        </picture>
        <div className="container__right-side">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <button className="container__button" onClick={handleClick}>
            VSTOUPIT
          </button>
        </div>
      </div>
      <div
        className={display !== true ? 'object-no-display' : 'object-display'}
      >
        {props.children}
      </div>
    </div>
  );
};