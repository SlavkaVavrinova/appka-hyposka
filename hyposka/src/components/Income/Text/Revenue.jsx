import React from 'react';
import { Link } from 'react-router-dom';

export const Revenue = () => {
  return (
    <>
      <p>
        Vezmi <strong>oznámení, kde se objeví výše příspěvku.</strong> Zde
        pozor, tuto formu bude banka akceptovat jako nějaké doplnění hlavního
        příjmu. Pravděpodobně nebude schopná hypotéku poskytnout jen na tento
        příjem. Ale i zde platí, vše potřebné se dozvíš až u konkrétní banky.
      </p>

      <label className="" htmlFor="">
        Přidat do tisku:
      </label>
      <input className="print" type="checkbox" />
      <Link to="/">
        <button className="button__back ">Domů</button>
      </Link>
      <Link to="/vydaje">
        <button>Pokračovat Výdaje</button>
      </Link>
    </>
  );
};
