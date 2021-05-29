import React, { useState } from 'react';
import './style.css';

export const ContactCard = (props) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="card__contact">
      <div className="container__contact">
        <div className="contact__left-side">
          <picture>
            <img className="contact__photo" src={props.photo} alt={props.alt} />
          </picture>
        </div>
        <div className="contact__right-side">
          <h2>{props.title}</h2>
          <p>{props.render()}</p>
          <button className="contact__button" onClick={handleClick}>
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
