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
        <HypoCalculator />
        <AnnuityCalculator />
        <div className="buttons-row__buttons">
          <Link to="/prijem">
            <button className="button--back">Zpět</button>
          </Link>
          <Link to="/banka">
            <button className="button--forward">Pokračovat</button>
          </Link>
        </div>
      </main>
    </>
  );
};
