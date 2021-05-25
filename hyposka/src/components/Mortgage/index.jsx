import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
