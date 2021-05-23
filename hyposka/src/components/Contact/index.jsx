import React from 'react';

import email from './img/email.svg';
import github from './img/logo-git.svg';

export const Contact = () => {
  return (
    <>
      <header>
        <h1>Kontakty</h1>
      </header>
      <p>Máš pro nás radu? Napiš, budeme rády!</p>
      <h2>Slávka Vavřinová</h2>
      <div className="contact">
        <img className="email" src={email} alt="E-mail" />
        <p>slavka.vav@gmail.com</p>
      </div>
      <div className="contact">
        <img className="github" src={github} alt="Logo GitHub" />
        <p>SlavkaVavrinova</p>
        <button>Více o Slávce</button>
      </div>
      <h2>Veronika Sípalová</h2>
      <div className="contact">
        <img className="email" src={email} alt="E-mail" />
        <p>ver.kosik@gmail.com</p>
      </div>
      <div className="contact">
        <img className="github" src={github} alt="Logo GitHub" />
        <p>Veronika Sípalová</p>
        <button>Více o Verče</button>
      </div>
    </>
  );
};
