import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import dot from './img/dot.svg';

import mortgage from './img/object.svg';
import income from './img/income.svg';
import costs from './img/costs.svg';
import bank from './img/bank.svg';

import cr from './img/cr.svg';
import quiz from './img/quiz.svg';
import bonus from './img/bonus.svg';

export const Home = () => {
  return (
    <>
      <main>
        <p>Ahoj, jsem Hypoška,</p>
        <p>
          <strong>řešíš bydlení</strong> a nepatříš mezi šťastlivce, kteří mohou
          zaplatit celou částku „ze svého“?
        </p>
        <p>
          <strong> S tím ti mohu pomoct právě já.</strong> Že o mně víš jen to,
          jak jsem drahá a hrozně prodlužuju zaplacení? To nemusí být vůbec
          pravda. Stačí vstoupit níže a já ti ukážu celý proces vyřízení, aby
          vše proběhlo rychle a hladce.
        </p>
        <p>
          <strong> Můj cíl:</strong> Nikdo nebude po první schůzce zaskočen.
          <strong> Kdo je připraven, není zaskočen.</strong>
        </p>
        <p>
          Nečekej radu, kam si dojít pro nejnižší úrok.
          <strong> Já ti poskytnu informace</strong> na co se připravit, jak to
          proběhne, co vzít s sebou na první návštěvu banky a na co dát pozor.
          <strong> Jsi připraven?</strong>
        </p>

        <div className="conteiner__img">
          <img src={mortgage} alt="účel" />
          <img src={income} alt="příjem" />
          <img src={costs} alt="náklady" />
          <img src={bank} alt="banka" />
        </div>
        <Link to="/hypoteka">
          <button>vstoupit</button>
        </Link>
        <div className="home-container">
          <div className="home-container__card">
            <img className="dot__home" src={dot} alt="Tečka" />
            <h2>Kvíz</h2>
            <div className="home-container__card-in">
              <img src={quiz} alt="Kvíz" />
              <p>Ověř své teoretické znalosti zpracování hypotéky.</p>
            </div>
            <Link to="/kviz">
              <button className="button__small">vstoupit</button>
            </Link>
          </div>

          <div className="home-container__card">
            <img className="dot__home" src={dot} alt="Tečka" />
            <h2>Kde to umí</h2>
            <div className="home-container__card-in">
              <img src={cr} alt="Mapa České Republiky" />
              <p>Zadej referenci na bankéře či poradce nebo ho najdi.</p>
            </div>
            <Link to="/mapa">
              <button className="button__small">vstoupit</button>
            </Link>
          </div>

          <div className="home-container__card">
            <img className="dot__home" src={dot} alt="Tečka" />
            <h2>Bonusy</h2>
            <div className="home-container__card-in">
              <img src={bonus} alt="Dárek" />
              <p>Fáze jednání, pojištění, čerpání, důvěřuj ale prověřuj.</p>
            </div>
            <Link to="/bonus">
              <button className="button__small">vstoupit</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
