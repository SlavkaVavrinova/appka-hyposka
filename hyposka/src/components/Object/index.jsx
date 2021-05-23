import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import picture1 from './img/1.svg';

export const Object = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/hypoteka">
              1. krok <img src={picture1} alt="1" />
            </Link>
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

      <h1>Účely</h1>
      <p>Jaký je tvůj plán? Co zaplatíš hypotékou? Vyber si:</p>
    </>
  );
};
