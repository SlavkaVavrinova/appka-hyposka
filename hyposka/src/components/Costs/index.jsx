import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Costs = () => {
  return (
    <>
      <main>
        <h1>Výdaje</h1>
        <p>
          V předchozím kroku jsme prošli různé formy příjmu. Další otázka
          bankéře bude: <em>Jaké máte pravidelné výdaje?</em> Zdá se to jako
          banalita, ale nezapomeň sdělit vše. Někdo by si to mohl vyložit jako
          úmyslné zamlčení, když na něco zapomeneš.
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
        <p>
          Prošli jsme příjmy a výdaje. Zajímá tě, jakou výši hypotéky na to bude
          možné poskytnout?
        </p>
        <p>
          {' '}
          To už je ale otázka na konkrétní banku. Každá banka má jinou metodu
          výpočtu. Můžeš kouknout na jejich webové stránky, někdy se tam
          orientační kalkulačka dá dohledat. Já ti tady nabízím orientační
          propočet, který ti ukáže, jaké máš výdaje a z toho odhadneš, zda je
          tvůj příjem dostatečný. Ber to ale s rezervou, přesné částky se dozvíš
          až z kalkulace banky.
        </p>
        <h2>HYPOŠKALKULAČKA</h2>
        <p>
          Žádáš s manželkou/manželem, partnerkou/partnerem - příjmy sečti,
          výdaje také
        </p>
        <form className="form-costs" onSubmit="">
          <h3>Životní minimum rodiny</h3>
          <label className="form-costs1">
            O hypotéku žádám sám:{' '}
            <input type="radio" name="person" value="first" checked="checked" />
          </label>
          <label className="form-costs2">
            O hypotéku žádám s někým z mé domácnosti:{' '}
            <input type="radio" name="person" value="second" />
          </label>
          <label className="form-costs3">
            Kolik dalších osob ze společné domácnosti bude o hypotéku žádat:
            <select name="family">
              <option value="0" selected="selected">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label className="form-costs4">
            Kolik je v domácnosti dětí do 6 let:
            <select name="children5">
              <option value="0" selected="selected">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label className="form-costs6">
            Kolik je v domácnosti dětí od 6 do 15 let:
            <select name="children15">
              <option value="0" selected="selected">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label className="form-costs7">
            Kolik je v domácnosti dětí 15 - 26 let (nezaopatřených):
            <select name="children26">
              <option value="0" selected="selected">
                0
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>

          <label className="form-costs8">
            Součet pravidelných <strong>výdajů</strong> žadatelů:{' '}
            <input type="number" />
          </label>

          <label className="form-costs9">
            Součet průměrných <strong>příjmů</strong> žadatelů{' '}
            <input type="number" />
          </label>
        </form>
        <p>
          <strong>TIP:</strong> Máš pocit, žes někdy pozdě zaplatil úvěr a bojíš
          se zamítnutí hypotéky. Doporučuji vše hlásit předem a říci detailně
          proč se to stalo. Upřímnost může pomoci tam, kde by systém hypotéku
          předem zamítl. Chceš si vše zjistit předem, aby výpis z bankovního
          registru nebyl překvapení? Nech si zaslat výpisy předem. V bance ho
          ukážeš a ona ti může rovnou sdělit, jestli je šance o hypotéku žádat.{' '}
        </p>{' '}
        <p>Zde najdeš více: </p>
        <ul>
          <li>
            <a href="https://www.solus.cz/" target="_blank">
              <strong> Solus</strong>{' '}
            </a>
          </li>

          <li>
            <a href="https://www.cbcb.cz/" target="_blank">
              <strong> Cbcb</strong>{' '}
            </a>
          </li>

          <li>
            <a href="https://www.cncb.cz/" target="_blank">
              <strong> Cncb</strong>{' '}
            </a>
          </li>
        </ul>
        <Link to="/prijem">
          <button className="button__back ">Zpět příjem</button>
        </Link>
        <Link to="/banka">
          <button>Pokračovat Banka</button>
        </Link>
      </main>
    </>
  );
};

/*Částky životního minima v Kč za měsíc
pro jednotlivce

3 860

pro první osobu v domácnosti

3 550

pro druhou a další osobu v domácnosti, která není nezaopatřeným dítětem

3 200

pro nezaopatřené dítě ve věku

do 6 let

1 970

6 až 15 let

2 420

15 až 26 let (nezaopatřené)

2 770

*/
