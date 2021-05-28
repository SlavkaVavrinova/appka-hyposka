import React from 'react';
import { Link } from 'react-router-dom';

export const TextBuyPension = () => {
  return (
    <>
      <p>
        Bohužel nemůžu sloužit, musíš hledat
        <strong>úvěr pro podnikatele</strong>. Banky nabízí takzvanou „Americkou
        hypotéku“ u které se nemusí dokládat na co peníze jsou. Ale ani tou není
        možné zaplatit nemovitost pouze na podnikání.
      </p>
      <p>
        Kupuješ dům pro své bydlení, ale je tam i část pro podnikání. Vyraž do
        banky a tam se informuj na přesné podmínky. Jistě nějaké řešení najdeš,
        ale o <em>"provozovně"</em> se zmiň hned v začátku.
      </p>
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
        <Link to="/prijem">
          <button>Pokračovat</button>
        </Link>
      </div>
    </>
  );
};
