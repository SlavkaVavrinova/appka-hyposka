import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Home } from './components/Home/index';

import { Mortgage } from './components/Mortgage/index';
import { Footer } from './components/Footer/index';
import { Quiz } from './components/Quiz/index';
import { Map } from './components/Map/index';
import { Bonus } from './components/Bonus/index';
import { Contact } from './components/Contact/index';

import './style.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/hypoteka" exact>
          <Mortgage />
        </Route>
        <Route path="/kviz" exact>
          <Quiz />
        </Route>
        <Route path="/mapa" exact>
          <Map />
        </Route>
        <Route path="/bonus" exact>
          <Bonus />
        </Route>
        <Route path="/kontakt" exact>
          <Contact />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));
