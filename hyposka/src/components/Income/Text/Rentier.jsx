import React from 'react';
import { Link } from 'react-router-dom';

export const Rentier = () => {
  return (
    <>
      <p>Tady tě pošlu hned do banky, protože to asi nebude úplně jednoduché</p>
      <div className="buttons-row">
        <div className="buttons-row__print">
          <label className="" htmlFor="">
            Přidat do tisku:
          </label>
          <input className="print" type="checkbox" />
        </div>
        <Link to="/">
          <button className="button__back ">Domů</button>
        </Link>
        <Link to="/vydaje">
          <button>Pokračovat Výdaje</button>
        </Link>
      </div>
    </>
  );
};
