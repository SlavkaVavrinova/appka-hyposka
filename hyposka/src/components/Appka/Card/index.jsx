import React from 'react';

export const Card = (props) => {
  return (
    <div className="container">
      <img className="container__photo" src={props.photo} alt={props.alt} />
      <div className="container__right-side">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>VSTOUPIT</button>
      </div>
    </div>
  );
};
