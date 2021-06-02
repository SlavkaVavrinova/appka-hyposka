import React from 'react';

import { Theory } from './Text/theory';
import { Insurance } from './Text/insurance';
import { Card } from '../Card/index';
import { Check } from './Text/check';
import { MoneySending } from './Text/moneysending';

import book from './img/book.svg';
import pump from './img/pump.svg';
import insurance from './img/insurance.svg';
import check from './img/check.svg';

import bank from './img/bank.svg';
import paper from './img/paper.svg';
import pen from './img/pen.svg';
import lock from './img/lock.svg';
import globe from './img/globe.svg';
import party from './img/party.svg';

export const Bonus = () => {
  return (
    <>
      <main>
        <h1>Bonusy</h1>
        <h2>Fáze zpracování hypotéky</h2>
        <div className="conteiner__img">
          <div>
            <img src={bank} alt="Banka" />
            <h3>Banka</h3>
            <p>Text</p>
          </div>
          <div>
            <img src={paper} alt="Papír" />
            <h3>Papírování</h3>
            <p>Text</p>
          </div>
          <div>
            <img src={pen} alt="Propiska" />
            <h3>Podpisy</h3>
            <p>Text</p>
          </div>
          <div>
            <img src={lock} alt="Zámek" />

            <h3>Úschova</h3>
            <p>Text</p>
          </div>
          <div>
            <img src={globe} alt="Globus" />
            <h3>Katastr</h3>
            <p>Text</p>
          </div>
          <div>
            <img src={party} alt="Párty" />
            <h3>Kolaudačkapárty</h3>
            <p>Text</p>
          </div>
        </div>

        <Card
          photo={book}
          alt="Kniha"
          title="Teorie"
          text="Základní informace k hypotečním úvěrům."
        >
          <Theory />
        </Card>
        <Card
          photo={pump}
          alt="Benzínová pumpa"
          title="Čerpání hypotéky "
          text="Ja dlouho trvá než banka zaplatí investiční záměr. "
        >
          <MoneySending />
        </Card>

        <Card
          photo={insurance}
          alt="Pojištění"
          title="Pojištění "
          text="S hypotékou souvisí pojištění a zde najdeš informace."
        >
          <Insurance />
        </Card>
        <Card
          photo={check}
          alt="lupa"
          title="Důvěřuj, ale prověřuj "
          text="Rady co vše můžeš před realizací hypotéky zkontrolovat."
        >
          <Check />
        </Card>
      </main>
    </>
  );
};
