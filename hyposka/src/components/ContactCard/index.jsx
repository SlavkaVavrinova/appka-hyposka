import React, { useState } from 'react';
import './style.css';

export const ContactCard = (props) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="card">
      <div className="container">
        <div className="container__left-side">
          <picture>
            <img
              className="container__photo"
              src={props.photo}
              alt={props.alt}
            />
          </picture>
        </div>
        <div className="container__right-side">
          <h2>{props.title}</h2>
          <p>{props.render()}</p>
          <button className="container__button" onClick={handleClick}>
            {display === true ? 'Zavřít' : 'Více'}
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
