import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Home } from './components/Home/index';

import { Mortgage } from './components/Mortgage/index';

import { Income } from './components/Income/index';
import { Costs } from './components/Costs/index';
import { Bank } from './components/Bank/';

import { Footer } from './components/Footer/index';
import { Quiz } from './components/Quiz/index';
import { Map } from './components/Map/index';
import { Bonus } from './components/Bonus/index';
import { Contact } from './components/Contact/index';
import { Navigation } from './components/Navigation/index';

import './style.css';
import { SecondNav } from './components/SecondNav';

const App = () => (
  <Router>
    <Navigation />

    <main>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>

        <Route path="/hypoteka" exact>
          <SecondNav />
          <Mortgage />
        </Route>

        <Route path="/prijem" exact>
          <SecondNav />
          <Income />
        </Route>
        <Route path="/vydaje" exact>
          <SecondNav />
          <Costs />
        </Route>
        <Route path="/banka" exact>
          <SecondNav />
          <Bank />
        </Route>
        <Route path="/kviz" exact>
          <Header />
          <Quiz />
        </Route>
        <Route path="/mapa" exact>
          <Header />
          <Map />
        </Route>
        <Route path="/bonus" exact>
          <Header />
          <Bonus />
        </Route>
        <Route path="/kontakt" exact>
          <Header />
          <Contact />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
