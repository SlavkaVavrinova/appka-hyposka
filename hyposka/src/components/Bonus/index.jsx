import React, { useState } from 'react';
import './style.css';

import { TextImg } from './TextImg';
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
        <div className="plac-for-box"></div>
        <div className="container-bonus">
          <TextImg
            photo={bank}
            alt="Banka"
            title="1. Banka"
            text="Hokus pokus 1"
          />
          <TextImg
            photo={paper}
            alt="Papír"
            title="2. Papírování"
            text="Hokus pokus 2"
          />
          <TextImg
            photo={pen}
            alt="Propiska"
            title="3. Podpisy"
            text="Hokus pokus 3"
          />
          <TextImg
            photo={lock}
            alt="Zámek"
            title="4. Úschova"
            text="Hokus pokus 4"
          />
          <TextImg
            photo={globe}
            alt="Globus"
            title="5. Katastr"
            text="Hokus pokus 5"
          />
          <TextImg
            photo={party}
            alt="Párty"
            title="6. Kolaudačka"
            text="Hokus pokus 6"
          />
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
