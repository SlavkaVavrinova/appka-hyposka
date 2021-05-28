import React from 'react';
import { Link } from 'react-router-dom';

export const TextRefinancing = () => {
  return (
    <>
      <p>
        Máš už hypotéku a chceš omrknout, jestli se nevyplatí jí přestěhovat do
        jiné banky
      </p>
      <h3>Co bude banka chtít vidět: </h3>
      <ul>
        <li>
          Původní <strong>smlouvu běžící hypotéky</strong> – je na tobě, jestli
          ji na první schůzce ukázat nechceš, ale na další už neotálej.
        </li>
        <li>
          Jaká bude <strong>výše k zaplacení</strong> v den refixace
        </li>
        <li>
          <strong>Vyčíslení</strong> - K první informativní schůzce ho
          nepotřebuješ, vezmi výpis z hypotéky nebo informaci z elektronického
          bankovnictví
        </li>
      </ul>
      <p>
        <strong>TIP:</strong> Až se pro refinancování rozhodneš, tak s
        vyčíslením neotálej. Pamatuj, datum refixace je pevné a když se o den
        nestihne, tak nastane problém.
      </p>
      <p>
        Banka si může požádat o další dokumenty týkající se účelu původní
        hypotéky, může chtít vidět kupní smlouvu, projektovou dokumentaci a
        další. To se dozvíš na první schůzce, není potřeba to řešit dopředu.
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
          <button>Pokračovat Příjem</button>
        </Link>
      </div>
    </>
  );
};
