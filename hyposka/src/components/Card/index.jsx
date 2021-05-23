import React, { useState } from 'react';

export const Card = (props) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="container">
      <img className="container__photo" src={props.photo} alt={props.alt} />
      <div className="container__right-side">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button onClick={handleClick}>VSTOUPIT</button>
        <div
          className={display !== true ? 'object-no-display' : 'object-display'}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

/*
const style = { display: display !== true ? 'none' : 'block' };
style={style}*/
