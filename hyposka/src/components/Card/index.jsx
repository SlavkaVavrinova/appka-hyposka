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
        <div className="container__left-side">
          <img className="dot" src={dot} alt="Tečka" />
          <img className="container__photo" src={props.photo} alt={props.alt} />
        </div>
        <div className="container__right-side">
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          <button className="container__button" onClick={handleClick}>
            {display === true ? 'Zavřít' : 'Vstoupit'}
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
