import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import logo from './img/logo.svg';

export const Navigation = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);

  const showMenu = () => {
    setisMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="main-nav__logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation__mobile">
          <button
            onClick={showMenu}
            className={isMenuOpened ? 'hamburger hamburger-open' : 'hamburger'}
          ></button>
          {isMenuOpened ? (
            <>
              <div className="links-mobile">
                <Link to="/">Domu</Link>
                <Link to="/kviz">Kvíz</Link>

                <Link to="/mapa">Mapa</Link>

                <Link to="/bonus">Bonusy</Link>

                <Link to="/kontakt">Kontakt</Link>
              </div>
            </>
          ) : null}
        </div>

        <div className="navigation__large">
          <Link to="/kviz">Kvíz</Link>

          <Link to="/mapa">Mapa</Link>

          <Link to="/bonus">Bonusy</Link>

          <Link to="/kontakt">Kontakt</Link>
        </div>
      </nav>
    </>
  );
};
