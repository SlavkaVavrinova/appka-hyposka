import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import object from './img/object.svg';
import income from './img/income.svg';
import costs from './img/costs.svg';
import bank from './img/bank.svg';

export const Home = () => {
  return (
    <>
      <p>Ahoj, jsem Hypoška,</p>
      <p>
        <strong>řešíš bydlení</strong> a nepatříš mezi šťastlivce, kteří mohou
        zaplatit celou částku „ze svého“?{' '}
      </p>

      <p>
        S tím ti mohu pomoct právě já. Že o mně víš jen to, jak jsem drahá a
        hrozně prodlužuju zaplacení? To nemusí být vůbec pravda. Stačí vstoupit
        níže a já ti ukážu celý proces vyřízení, aby vše proběhlo rychle a
        hladce.
      </p>
      <p>
        <strong> Můj cíl:</strong> Nikdo nebude po první schůzce zaskočen.{' '}
        <strong> Kdo je připraven, není zaskočen.</strong>
      </p>
      <p>
        Nečekej radu, kam si dojít pro nenižší úrok. Já ti poskytnu informace na
        co se připravit, jak to proběhne, co vzít s sebou na první návštěvu
        banky a na co dát pozor. <strong>Jsi připraven?</strong>
      </p>

      <div className="conteiner__img">
        <img src={object} alt="účel" />
        <img src={income} alt="příjem" />
        <img src={costs} alt="náklady" />
        <img src={bank} alt="banka" />
      </div>
      <Link to="/hypoteka">
        <button>vstoupit</button>
      </Link>
    </>
  );
};
