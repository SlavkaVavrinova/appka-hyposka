import React, { useState } from 'react';
import './style.css';

export const Questions = (props) => {
  return (
    <>
      <div className="id">
        <span className={props.key}></span>
        <span className="question">{props.title}</span>
        <span className="answer">{props.textA}</span>

        <span className="answer">{props.textB}</span>
      </div>

      <img className="answer__img" src={props.photo} />
    </>
  );
};

/*const answered = (props) => {
  let itemClass = null;
  if (props.selected) {
    itemClass = 'item item--selected';
  } else {
    itemClass = 'item';
  }
*/
