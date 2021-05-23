import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style.css';

import { Object } from '../Object/index';
import { Income } from '../Income/index';
import { Costs } from '../Costs/index';
import { Bank } from '../Bank/index';

export const Mortgage = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/hypoteka" exact>
            <Object />
          </Route>
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
