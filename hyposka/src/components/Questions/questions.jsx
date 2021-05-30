import React, { useEffect, useState } from 'react';
import cx from 'classnames/bind';
import './style.css';

export const Questions = (props) => {
  const handleRightAnswer = (event) => {
    props.goAhead();
  };
  const handleWrongAnswer = (event) => {
    alert('Zkus to znovu');
  };

  return (
    <>
      <div className={cx('id', props.className)}>
        <span className={props.key}></span>
        <span className="question">{props.title}</span>
        <span className="answer" onClick={handleRightAnswer}>
          {props.textA}
        </span>
        <span className="answer" onClick={handleWrongAnswer}>
          {props.textB}
        </span>
      </div>
      <img className="answer__img" src={props.photo} />
    </>
  );
};
