import React from 'react';
import { Card } from '../Card/index';

import { Entrepreneur } from './Text/Entrepreneur';
import { Revenue } from './Text/Revenue';
import { Employee } from './Text/Employee';
import { Rentier } from './Text/Rentier';

export const Income = () => {
  return (
    <>
      <p>V dalším kroku projdeme, co bude banka chtít asi od tebe. </p>
      <p>
        Na schůzku si vezmi minimálně
        <strong>občanku a lépe ještě nějaký druhý doklad</strong>. Samozřejmě to
        bude potřeba až u žádosti o hypotéku, ne u informativní schůzky do
        budoucna.
      </p>
      <p>
        Míříš do své banky? I tam se hodí. Mohou si tě najít v systému, to bez
        občanky nesmí.
      </p>
      <p>
        Dál se dozvíš, co si můžeš vzít s sebou pro urychlení, abys už po první
        schůzce věděl/a, zda hypotéka vychází. Určitě to ale neznamená, že musíš
        hned u dveří sdělovat průměrný příjem
      </p>
      <p>Vyber, kdo jsi, odkud tečou tvé příjmy:</p>
      <Card
        photo=""
        alt="Výplatní páska"
        title="Zaměstnanec "
        text="Příjem mi vyplácí zaměstnavatel."
      >
        <Employee />
      </Card>
      <Card
        photo=""
        alt="Daňové přiznání"
        title="Podnikatel"
        text="Podnikám, příjem mám od zákazníků a na konci roku si zpracovávám daňové přiznání."
      >
        <Entrepreneur />
      </Card>
      <Card
        photo=""
        alt="Výměr dávky / důchodu"
        title="Jsem na mateřské /v důchodu"
        text="Příjem mi posílá Okresní správa sociálního zabezpečení nebo pracovní úřad."
      >
        <Revenue />
      </Card>
      <Card
        photo=""
        alt="Pohoda"
        title="Rentiér "
        text="Šťastlivec, který pobírá nějakou rentu "
      >
        <Rentier />
      </Card>
    </>
  );
};
