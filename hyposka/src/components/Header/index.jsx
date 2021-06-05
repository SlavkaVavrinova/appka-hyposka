import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="banner">
          <div className="banner__h">
            <h1>Appka Hypoška </h1> <p>u bydlení kámoška</p>
          </div>
          <p className="banner__p">
            Jednoduché kroky k vysněnému bydlení s hypotékou.
          </p>
          <div className="banner__button">
            <p>
              Nejsem banka, finanční poradce, nic nenabízím!
              <strong> Poskytuji informace</strong>, co tě se mnou čeká.
            </p>
            <Link to="/hypoteka">
              <button className="button--banner">vstoupit</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
