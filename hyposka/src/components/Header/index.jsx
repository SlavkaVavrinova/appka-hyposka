import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/index';

export const Header = () => {
  return (
    <>
      <header>
        <Navigation />
        <div className="banner">
          <h1>Appka HYPOŠKA</h1>
          <div>U bydlení kámoška</div>
          <p>
            Jednoduché kroky k vysněnému bydlení s hypotékou. Nejsem banka,
            finanční poradce, nic nenabízím!
            <strong>
              <br></br>Poskytuji informace
            </strong>
            , co tě se mnou čeká.
          </p>
          <Link to="/hypoteka">
            <button>vstoupit</button>
          </Link>
        </div>
      </header>
    </>
  );
};
