import React from 'react';
import { Slavka } from './text/slavka.jsx';
import { Veru } from './text/veru.jsx';
import { ContactCard } from '../ContactCard';
import { FormContact } from './../FormContact/index';

import slavka from './img/slavka.jpg';
import verca from './img/veru.png';
import email from './img/email.svg';
import github from './img/git.svg';
import './style.css';

export const Contact = () => {
  return (
    <>
      <main>
        <h1>Kontakty</h1>
        <h2>Slávka Vavřinová</h2>

        <ContactCard
          photo={slavka}
          alt="Slávka"
          title="Slávka Vavřinová"
          render={(data) => (
            <>
              <div className="contact">
                <img className="email" src={email} alt="E-mail" />
                <p>slavka.vav@gmail.com</p>
              </div>
              <div className="contact">
                <img className="github" src={github} alt="Logo GitHub" />
                <a className="Slavka" href="https://github.com/SlavkaVavrinova">
                  Slávka Vavřinová
                </a>
              </div>
            </>
          )}
        >
          <Slavka />
        </ContactCard>

        <h2>Verča Sípalová</h2>
        <ContactCard
          photo={verca}
          alt="Verča"
          title="Verča Sípalová"
          render={(data) => (
            <>
              <div className="contact">
                <img className="email" src={email} alt="E-mail" />
                <p>ver.kosik@gmail.com</p>
              </div>
              <div className="contact">
                <img className="github" src={github} alt="Logo GitHub" />
                <a className="Verca" href="https://github.com/Ver10">
                  Verča Sípalová
                </a>
              </div>
            </>
          )}
        >
          <Veru />
        </ContactCard>
        <p>Máš pro nás radu? Napiš, budeme rády!</p>
        <FormContact />
      </main>
    </>
  );
};
