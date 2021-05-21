import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Object } from './Object/index';
import { Income } from './Income/index';
import { Costs } from './Costs/index';
import { Bank } from './Bank/index';

export const Appka = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/appka/object">1. krok</Link>
          </li>
          <li>
            <Link to="/appka/income">2. krok</Link>
          </li>
          <li>
            <Link to="/appka/costs">3. krok</Link>
          </li>
          <li>
            <Link to="/appka/bank">4. krok</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Switch>
          <Route path="/appka/object" exact>
            <Object />
          </Route>
          <Route path="/appka/income" exact>
            <Income />
          </Route>
          <Route path="/appka/costs" exact>
            <Costs />
          </Route>
          <Route path="/appka/bank" exact>
            <Bank />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
