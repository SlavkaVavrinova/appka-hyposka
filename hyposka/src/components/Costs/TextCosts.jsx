import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextCosts = (props) => {
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
      <h1>Výdaje</h1>
      <p>
        V předchozím kroku jsme prošli různé formy příjmu. Další otázka bankéře
        bude: <em>Jaké máte pravidelné výdaje?</em> Zdá se to jako banalita, ale
        nezapomeň sdělit vše. Někdo by si to mohl vyložit jako úmyslné zamlčení,
        když na něco zapomeneš.
      </p>
      <p> Zde pro připomenutí, co vše je výdajem: </p>
      <ul>
        <li>Splátky úvěrů a půjček</li>
        <li>Leasing</li>
        <li>Nepodepsals někomu ručení?</li>
        <li>Nějaký spotřebič, telefon na splátky</li>
        <li>Alimenty</li>
        <li>Životní minimum</li>
        <li>Nenarozené děti</li>
      </ul>
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
      <p>
        <strong>TIP:</strong> Máš pocit, žes někdy pozdě zaplatil úvěr a bojíš
        se zamítnutí hypotéky. Doporučuji vše hlásit předem a říci detailně proč
        se to stalo. Upřímnost může pomoci tam, kde by systém hypotéku předem
        zamítl. Chceš si vše zjistit předem, aby výpis z bankovního registru
        nebyl překvapení? Nech si zaslat výpisy předem. V bance ho ukážeš a ona
        ti může rovnou sdělit, jestli je šance o hypotéku žádat.{' '}
      </p>
      <p>Zde najdeš více: </p>
      <ul>
        <li>
          <a href="https://www.solus.cz/" target="_blank">
            <strong> Solus</strong>
          </a>
        </li>

        <li>
          <a href="https://www.cbcb.cz/" target="_blank">
            <strong> Cbcb</strong>
          </a>
        </li>
        <li>
          <a href="https://www.cncb.cz/" target="_blank">
            <strong> Cncb</strong>
          </a>
        </li>
      </ul>
    </>
  );
};
