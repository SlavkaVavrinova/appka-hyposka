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

export const Bonus = () => {
  return (
    <>
      <main>
        <h1>Bonusy</h1>

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
