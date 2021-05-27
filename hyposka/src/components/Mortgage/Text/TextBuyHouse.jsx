import React from 'react';
import { Link } from 'react-router-dom';

export const TextBuyHouse = () => {
  return (
    <>
      <p>
        Vezmi do banky něco, kde je vidět cena, za kterou dům spolu koupíme:
      </p>
      <ul>
        <li>
          Ideální je <strong>kupní smlouva</strong>, ale tu dostaneš až za hodně
          dlouho.
        </li>
        <li>
          Alternativa je <strong>smlouva o smlouvě budoucí</strong>. To je skoro
          to stejné a taky se bude dělat většinou později.
        </li>
        <li>
          se bude dělat většinou později. Fajn je rezervační smlouva, ale tu ti
          dají jen za podpis. Podepíšeš 🡪 platíš rezervační poplatek a prostě
          kupuješ. se bude dělat většinou později.
        </li>

        <li>
          Nic z toho nemáš? Vezmi <strong>inzerát, kde je cena a údaje</strong>
        </li>
      </ul>
      <h3>Co pro odhadce?</h3>
      <p>
        Vytiskni<strong> elektronický výpis z katastru</strong>
        <a href="https://nahlizenidokn.cuzk.cz/" target="_blank">
          <strong> ZDE</strong>
        </a>
      </p>
      <p>
        Hledej v něm překvapení v podobě omezení. Není třeba se lekat, nemusí to
        být exekuce, ale hypotéka původních majitelů. Ta se dá zaplatit, ale
        musí se pohlídat, že bude zaplacena.
      </p>

      <p>
        Problematická jsou <strong>věcná břemena</strong>, týkající se užívání.
        Nechceš kupovat dům, kde někdo může bydlet s tebou. Naopak věcná břemena
        pro energetické společnosti, vadit nebudou. V případě havárie je jen
        pustíš ke kabelu či přípojce na tvém pozemku. U každého věcného břemene
        se informuj na smlouvu a co přesně umožňuje. Soused jezdící traktorem
        tvým pozemkem by bance vadit nemusel, ale tobě třeba ano.
      </p>

      <p>
        Odhadce se bude shánět po projektové dokumentaci. To už ale počkej na
        konkrétní požadavek vybrané banky. Kdyby dokumentace nebyla, tak neboj,
        metrem se to dá zvládnout také.
      </p>

      <label className="" htmlFor="">
        Přidat do tisku:
      </label>
      <input className="print" type="checkbox" />
      <Link to="/">
        <button className="button__back ">Domů</button>
      </Link>
      <Link to="/prijem">
        <button> Pokračovat Příjem</button>
      </Link>
    </>
  );
};

/*<Link to="https://nahlizenidokn.cuzk.cz/">*/
