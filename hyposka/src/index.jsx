import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Home } from './components/Home/index';
import { Appka } from './components/Appka/index';
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
          <Link className="main-nav__link" to="/appka">
            Appka HYPOŠKA
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/quiz">
            Kvíz
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/map">
            Mapa
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/bonus">
            Bonusy
          </Link>
        </li>
        <li>
          <Link className="main-nav__link" to="/contact">
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
        <Route path="/appka" exact>
          <Object />
        </Route>
        <Route path="/quiz" exact>
          <Quiz />
        </Route>
        <Route path="/map" exact>
          <Map />
        </Route>

        <Route path="/bonus" exact>
          <Bonus />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
    </main>
    <Footer />
  </Router>
);

render(<App />, document.querySelector('#app'));

/*        
          <Route path="/map" exact></Route>
          <Route path="/bonus" exact></Route>
          <Route path="/contact" exact></Route>*/