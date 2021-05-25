import './style.css';

import React, { useEffect, useState } from 'react';
import { db } from './../../db';
import firebase from 'firebase/app';

export const FormMap = () => {
  return (
    <>
      <form className="form-map" onSubmit="">
        <label className="form-map__select">
          Osoba je:{' '}
          <select name="Vyber poradce">
            <option value="poradce" selected="selected">
              Pracovník banky
            </option>
            <option value="bankéř">Finanční poradce</option>
          </select>
        </label>
        <label className="form-map__name">
          Jméno bankéře/poradce: <input type="text" />
        </label>
        <label className="form-map__phone">
          Telefonní kontakt bankéře/poradce: <input type="text" />
        </label>
        <label className="form-map__email">
          E-mail bankéře/poradce: <input type="text" />
        </label>
        <label className="form-map__address">
          Zadej adresu, bude předěláno dle map: <input type="text" />
        </label>

        <label className="form-map__comment">
          Zadej komentář se zkušeností:
          <textarea className="form-map__text-area" name="comment">
            Má zkušenost s bankéřem/poradcem je
          </textarea>
        </label>
        <button>Odeslat</button>
      </form>
    </>
  );
};
