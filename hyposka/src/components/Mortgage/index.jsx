import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Income } from '../Income/index';
import { Costs } from '../Costs/index';
import { Bank } from '../Bank/index';

export const Mortgage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/hypoteka">1. krok</Link>
          </li>
          <li>
            <Link to="/prijem">2. krok</Link>
          </li>
          <li>
            <Link to="/vydaje">3. krok</Link>
          </li>
          <li>
            <Link to="/banka">4. krok</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route path="hypoteka" exact></Route>
          <Route path="/prijem" exact>
            <Income />
          </Route>
          <Route path="/vydaje" exact>
            <Costs />
          </Route>
          <Route path="/banka" exact>
            <Bank />
          </Route>
        </Switch>

        <h1>ÚČEL HYPOTÉKY</h1>
        <p>Jaký je tvůj plán? Co zaplatíš hypotékou? Vyber si:</p>
      </main>
    </>
  );
};

/*
{purposes.map((purpose) => (
        <Card {...purpose} key={purpose.title} />
      ))}*/

const purposes = [
  {
    photo: './img/buy-house.jpg',
    alt: 'Rodinný dům',
    title: 'Koupit dům',
    text: 'Chci koupit rodinný dům, kde plánuji bydlet. Pouze koupě bez rekonstrukce',
  },
  {
    photo: './img/land.jpg',
    alt: 'Stavební pozemek',
    title: 'Koupit stavební pozemek',
    text: 'Chci koupit pozemek, kde budu stavět, ale zatím ho jen kupuji.',
  },
];
