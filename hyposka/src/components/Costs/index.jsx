import React from 'react';
import { Link } from 'react-router-dom';
import { HypoCalculator } from './hypoCalculator';
import { AnnuityCalculator } from './annuityCalculator';
import { TextCosts } from './TextCosts';

import './style.css';

export const Costs = (props) => {
  return (
    <>
      <main>
        <TextCosts
          addToPrint={props.addToPrint}
          checkedToPrint={props.listToPrint}
          printName="TextCosts"
        />
        <p>
          Prošli jsme příjmy a výdaje. Zajímá tě, jakou výši hypotéky na to bude
          možné poskytnout?
        </p>
        <p>
          To už je ale otázka na konkrétní banku. Každá banka má jinou metodu
          výpočtu. Můžeš kouknout na jejich webové stránky, někdy se tam
          orientační kalkulačka dá dohledat. Já ti tady nabízím orientační
          propočet, který ti ukáže, jaké máš výdaje a z toho odhadneš, zda je
          tvůj příjem dostatečný. Ber to ale s rezervou, přesné částky se dozvíš
          až z kalkulace banky.
        </p>
        <HypoCalculator />
        <div className="buttons-row">
          <div className="buttons-row__buttons">
            <Link to="/prijem">
              <button className="button__back">Zpět</button>
            </Link>
            <Link to="/banka">
              <button className="button__forward">Pokračovat</button>
            </Link>
          </div>
        </div>
        <AnnuityCalculator />
      </main>
    </>
  );
};
