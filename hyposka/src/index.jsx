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
import logo from './img/logo.svg';

import './style.css';

const App = () => (
  <Router>
    <nav>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />{' '}
      </Link>

      <ul className="main-nav">
        <li>
          <Link className="main-nav__link" to="/hypoteka">
            Appka HYPOŠKA
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/kviz">
            Kvíz
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/mapa">
            Mapa
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/bonus">
            Bonusy
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/kontakt">
            Kontakty
          </Link>
        </li>
      </ul>
    </nav>
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
