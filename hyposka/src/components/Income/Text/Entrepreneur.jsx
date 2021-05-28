import React from 'react';
import { Link } from 'react-router-dom';

export const Entrepreneur = () => {
  return (
    <>
      <p>
        Doporučuji hned na první schůzku přibalit daňové přiznání minimálně za
        poslední rok, ideálně 2. Jako podnikatel máš možnost využít paušální
        výdaje, různé odpočty a může se stát, že se tam hypotéka nebude chtít
        úplně vejít. U podnikání je někdy lepší začít právě kalkulací příjmu,
        kdyby bylo nutné hledat banku, která tyto optimalizace zohledňuje. Taky
        doporučím navštívit svou banku. Je možné, že má připraven dárek v podobě
        nějakých limitů, které je schopná poskytnout bez doložení přiznání na
        základě pohybů na účtu.
      </p>
      <div className="buttons-row">
        <div className="buttons-row__print">
          <label className="" htmlFor="">
            Přidat do tisku:
          </label>
          <input className="print" type="checkbox" />
        </div>
        <Link to="/hypoteka">
          <button className="button__back ">Zpět</button>
        </Link>
        <Link to="/vydaje">
          <button>Pokračovat</button>
        </Link>
      </div>
    </>
  );
};
