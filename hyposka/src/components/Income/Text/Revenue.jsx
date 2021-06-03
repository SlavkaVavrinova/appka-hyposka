import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Revenue = (props) => {
  const [checked, setChecked] = useState(
    props.checkedToPrint[props.printName] === true,
  );
  const handleChange = (event) => {
    const value = event.target.checked;
    setChecked(value);
    props.addToPrint(props.printName, value);
  };
  return (
    <>
      <p>
        Vezmi <strong>oznámení, kde se objeví výše příspěvku.</strong> Zde
        pozor, tuto formu bude banka akceptovat jako nějaké doplnění hlavního
        příjmu. Pravděpodobně nebude schopná hypotéku poskytnout jen na tento
        příjem. Ale i zde platí, vše potřebné se dozvíš až u konkrétní banky.
      </p>
      <div className="buttons-row">
        <div className="buttons-row__print">
          <label className="" htmlFor="">
            Přidat do tisku:
          </label>
          <input
            className="print"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <Link to="/print">Prohlédnout tisk</Link>
        </div>
        <div className="buttons-row__buttons">
          <Link to="/hypoteka">
            <button className="button__back ">Zpět</button>
          </Link>
          <Link to="/vydaje">
            <button className="button__forward">Pokračovat</button>
          </Link>
        </div>
      </div>
    </>
  );
};
