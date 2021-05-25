import React from 'react';
import { Link } from 'react-router-dom';

import picture1 from './img/1.svg';
import picture2 from './img/2.svg';
import picture3 from './img/3.svg';
import picture4 from './img/4.svg';

export const SecondNav = () => {
  return (
    <>
      <nav className="second-nav">
        <ul>
          <li>
            <div className="second-nav__item">
              <Link to="/hypoteka">
                Účel hypotéky <br />
                <img className="second-nav__img" src={picture1} alt="1" />
              </Link>
            </div>
          </li>
          <li>
            <div className="second-nav__item">
              <Link to="/prijem">
                Příjem <br />
                <img className="second-nav__img" src={picture2} alt="2" />
              </Link>
            </div>
          </li>
          <li>
            <div className="second-nav__item">
              <Link to="/vydaje">
                Výdaje <br />
                <img className="second-nav__img" src={picture3} alt="3" />
              </Link>
            </div>
          </li>
          <li>
            <div className="second-nav__item">
              <Link to="/banka">
                Banka / poradce <br />
                <img className="second-nav__img" src={picture4} alt="4" />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
