import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/index';

export const Header = () => {
  return (
    <>
      <header>
        <div className="banner">
          <h1>Appka HYPOŠKA u bydlení kámoška</h1>
          <p>Jednoduché kroky k vysněnému bydlení s hypotékou.</p>
          <p>
            Nejsem banka, finanční poradce, nic nenabízím!
            <strong> Poskytuji informace</strong>, co tě se mnou čeká.
          </p>
          <Link to="/hypoteka">
            <button>vstoupit</button>
          </Link>
        </div>
      </header>
    </>
  );
};
