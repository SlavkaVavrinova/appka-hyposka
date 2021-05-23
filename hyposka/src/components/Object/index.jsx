import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import picture1 from './img/1.svg';
import picture2 from './img/2.svg';
import picture3 from './img/3.svg';
import picture4 from './img/4.svg';

import pictureBuyHouse from './img/buy-house.jpg';

import pictureBuyLand from './img/land.jpg';
import pictureBuyFlat from './img/buy-flat.jpg';

import { Card } from '../Card/index';
import { TextBuyHouse } from './Text/TextBuyHouse';
import { TextBuyLand } from './Text/TextBuyLand';
import { TextBuyFlat } from './Text/TextBuyFlat';

export const Object = () => {
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
      <h1>Účely</h1>
      <p>Jaký je tvůj plán? Jak hypotéka pomůže? Vyber si:</p>

      <Card
        photo={pictureBuyHouse}
        alt="Rodinný dům"
        title="Koupit dům"
        text="Chci koupit rodinný dům, kde plánuji bydlet. Pouze koupě bez rekonstrukce"
      >
        <TextBuyHouse />
      </Card>
      <Card
        photo={pictureBuyLand}
        alt="Stavební pozemek"
        title="Koupit stavební pozemek"
        text="Chci koupit pozemek, kde budu stavět, ale zatím ho jen kupuji."
      >
        <TextBuyLand />
      </Card>
      <Card
        photo={pictureBuyFlat}
        alt="Byt"
        title="Koupit byt"
        text="Chci koupit byt ihned k nastěhování. Rekonstrukce není v plánu"
      >
        <TextBuyFlat />
      </Card>
    </>
  );
};
