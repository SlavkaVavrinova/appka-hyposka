import React, { useState } from 'react';
import './style.css';

export const Questions = (props) => {
  return (
    <>
      <div className="id">
        <div className={props.key}></div>
        <div className="question">
          <div className={props.title}></div>
          <div className="answer">
            <div className={props.textA}></div>
            <div className={props.textB}></div>

            <img className="answer__img" src={props.photo} />
          </div>
        </div>
      </div>
    </>
  );
};
