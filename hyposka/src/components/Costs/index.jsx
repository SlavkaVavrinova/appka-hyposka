import React from 'react';
import { Link } from 'react-router-dom';
import { HypoCalculator } from './hypoCalculator';

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
          <Link to="/prijem">
            <button className="button__back">Zpět</button>
          </Link>
          <Link to="/banka">
            <button>Pokračovat</button>
          </Link>
        </div>
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
