import React from 'react';

import email from './img/email.svg';
import github from './img/git.svg';
import './style.css';
import { FormContact } from './../FormContact/index';

export const Contact = () => {
  return (
    <>
      <main>
        <h1>Kontakty</h1>
        <h2>Slávka Vavřinová</h2>
        <div className="contact">
          <img className="email" src={email} alt="E-mail" />
          <p>slavka.vav@gmail.com</p>
        </div>
        <div className="contact">
          <img className="github" src={github} alt="Logo GitHub" />
          <p>SlavkaVavrinová</p>
          <button className="btn-about" /*onClick={handleClick}*/>
            Více o Slávce
          </button>
        </div>
        <h2>Veronika Sípalová</h2>
        <div className="contact">
          <img className="email" src={email} alt="E-mail" />
          <p>ver.kosik@gmail.com</p>
        </div>
        <div className="contact">
          <img className="github" src={github} alt="Logo GitHub" />
          <p>Veronika Sípalová</p>
          <button className="btn-about" /*onClick={handleClick}*/>
            Více o Verče
          </button>
        </div>

        <p>Máš pro nás radu? Napiš, budeme rády!</p>
        <FormContact />
      </main>
    </>
  );
};
