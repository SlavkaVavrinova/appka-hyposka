import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer__logo" src="./img/logo-footer.svg" alt="Logo" />
        <div className="footer__text">
          <img src="./img/c.svg" alt="Copyright" />
          <p> 2021 Slávka a Verča</p>
        </div>
      </footer>
    </>
  );
};
