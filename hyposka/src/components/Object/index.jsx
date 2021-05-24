import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import picture1 from './img/1.svg';
import picture2 from './img/2.svg';
import picture3 from './img/3.svg';
import picture4 from './img/4.svg';

import pictureBuyHouse from './img/buy-house.jpg';

import pictureBuyLand from './img/buy-land.jpg';
import pictureBuyFlat from './img/buy-flat.jpg';
import pictureBuyCottage from './img/buy-cottage.jpg';
import pictureBuyPension from './img/buy-pension.jpg';
import pictureReconstruction from './img/reconstruction.jpg';

import { Card } from '../Card/index';
import { TextBuyHouse } from './Text/TextBuyHouse';
import { TextBuyLand } from './Text/TextBuyLand';
import { TextBuyFlat } from './Text/TextBuyFlat';
import { TextBuyCottage } from './Text/TextBuyCottage';
import { TextBuyPension } from './Text/TextBuyPension';
import { TextRefinancing } from './Text/TextRefinancing';
import { TextBuild } from './Text/TextBuild';
import { TextReconstruction } from './Text/TextReconstruction';
import { TextBuyWithReconstruction } from './Text/TextBuyWithReconstruction';

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

      <Card
        photo={pictureBuyCottage}
        alt="Chata"
        title="Koupit chatu"
        text="Chci si pořádit chatu a rekreovat se. Žádná práce, pouze odpočinek"
      >
        <TextBuyCottage />
      </Card>
      <Card
        photo={pictureBuyPension}
        alt="Penzion Gerta"
        title="Koupit penzion, hotel, fabriku benzínku ..."
        text="Chci pořídit nemovitost pro svoje podnikání a vydělat peníze."
      >
        <TextBuyPension />
      </Card>
      <Card
        photo=""
        alt="Smlouva o hypotečním úvěru"
        title="Refinancování"
        text="Blíží se ti výročí hypotéky a chceš si sjednat nejlepší podmínky pro další fixaci."
      >
        <TextRefinancing />
      </Card>
      <p className="text-between">Nebo něco odvážnějšího?</p>
      <Card
        photo=""
        alt="Výstavba"
        title="Výstavba"
        text="Chci si postavit dům nebo chatu. Svépomocí nebo mi pomůže firma."
      >
        <TextBuild />
      </Card>
      <Card
        photo={pictureReconstruction}
        alt="Rekonstrukce"
        title="Opravit si byt, dům nebo chatu"
        text="Mám nemovitost kterou si chci zvelebit a potřebuji peníze na rekonstrukci"
      >
        <TextReconstruction />
      </Card>
      <p className="text-between">Jsi fajnšmekr?</p>
      <Card
        photo=""
        alt="Koupě s rekonstrukcí"
        title=" Koupit starší nemovitost a opravit jí "
        text="Naskytla se skvělá koupě starší nemovitosti, jen nutně potřebuje rekonstrukci"
      >
        <TextBuyWithReconstruction />
      </Card>
    </>
  );
};
