import React from 'react';
import { Link } from 'react-router-dom';

export const TextReconstruction = () => {
  return (
    <>
      <p>
        Promysli, co vše se bude rekonstruovat a <strong>rozpočet</strong>. Vzor
        rozpočtu ti poskytne banka či poradce, ale stačí vzít papír a na začátek
        si to sepsat přibližně. Nejlepší je odborně vypracovaný rozpočet
        stavební firmou. Ideálně na doporučení, aby se pak nenavyšoval.
      </p>

      <p>
        Plánuješ rekonstruovat <strong>svépomocí</strong>? O to víc se nad
        rozpočtem zamysli. Bude rekonstrukce rozsáhlá a máš k dispozici
        projektovou dokumentaci. Určitě ji do banky vezmi.
      </p>

      <p>
        Nevíš, zda plánovaná rekonstrukce vyžaduje
        <strong>nahlášení stavebnímu úřadu</strong> nebo celý proces získání
        <strong>stavebního povolení</strong>? Je dobré se na to informovat.
        Očekávej, že pokud je hlášení nutné, tak banka ho bude chtít časem
        vidět. Pozor na rady kamarádů, na stavební úřad to radši nehlásit.
        Jakmile se k rekonstrukci vyjádří odhadce, tak banka bude chtít zákon
        dodržet. Jistě tě ale nic takového nenapadlo.
      </p>

      <p>
        Chceš půjčit polovinu a bance nic není do toho, kolik bude rekonstrukce
        stát celkem? To není bohužel pravda. Banka bude chtít jistotu, že stavba
        bude dokončena. Připrav si i
        <strong> informaci, jak dofinancuješ celý rozpočet:</strong>
      </p>

      <ul>
        <li>Peníze na účtu</li>
        <li>Končící investice za nějaý čas</li>
        <li>Prodej současného bydlení atd.</li>
      </ul>

      <Link to="/prijem">
        <button>2. Příjem</button>
      </Link>
    </>
  );
};
