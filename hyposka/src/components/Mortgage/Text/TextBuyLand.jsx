import React from 'react';
import { Link } from 'react-router-dom';

export const TextBuyLand = () => {
  return (
    <>
      <p>Vezmi do banky něco, kde je vidět cena pozemku:</p>
      <ul>
        <li>
          Ideální je<strong> kupní smlouva</strong>, ale tu dostaneš až za hodně
          dlouho.
        </li>
        <li>
          Alternativa je <strong>smlouva o smlouvě budoucí</strong>. To je skoro
          to stejné a taky se bude dělat většinou později.
        </li>
        <li>
          Fajn je <strong>rezervační smlouva</strong>, ale tu ti dají jen za
          podpis. Podepíšeš 🡪 platíš rezervační poplatek a prostě kupuješ.
        </li>
        <li>
          Nic z toho nemáš? Vezmi <strong>inzerát, kde je cena a údaje</strong>
        </li>
      </ul>
      <h3> Co pro odhadce?</h3>
      <p>
        Vytiskni<strong> elektronický výpis z katastru</strong>
        <a href="https://nahlizenidokn.cuzk.cz/" target="_blank">
          <strong> ZDE</strong>
        </a>
      </p>
      <p>
        Hledej v něm překvapení v podobě omezení. Není třeba se lekat, nemusí to
        být exekuce, ale <strong>hypotéka původních majitelů</strong>. Ta se dá
        zaplatit, ale musí se pohlídat, že bude zaplacena.
      </p>
      <p>
        Pozor na <strong>věcná břemena</strong>. Pro energetické společnosti
        vadit nemusí. V případě havárie je jen pustíš ke kabelu či přípojce na
        pozemku. U každého věcného břemene se informuj na smlouvu a co přesně
        umožňuje. Soused jezdící traktorem tvým pozemkem by bance vadit nemusel,
        ale tobě třeba ano.
      </p>
      <p>
        <strong>Potvrzení, že pozemek je stavební.</strong> V katastru
        nemovitostí to není vidět, potřebuješ potvrzení obce o tom, že pozemek
        je v územním plánu nastaven jako stavební pro bydlení nebo rekreaci.
        Není možné stavět dům na pozemku, který je vedený jako ostatní plocha -
        parkoviště.
      </p>
      <label className="" htmlFor="">
        Přidat do tisku:
      </label>
      <input className="print" type="checkbox" />
      <Link to="/">
        <button className="button__back ">Domů</button>
      </Link>
      <Link to="/prijem">
        <button>Pokračovat Příjem</button>
      </Link>
    </>
  );
};
