import './style.css';

import React, { useEffect, useState } from 'react';
import { db } from './../../db';
import firebase from 'firebase/app';

export const FormContact = () => {
  return (
    <>
      <form className="form-contact" onSubmit="">
        <label className="form-contact__name">
          Jméno: <input type="text" />
        </label>

        <label className="form-contact__email">
          E-mail: <input type="text" />
        </label>
        <label className="form-map__message">
          Vzkaz či doporučení: <input type="text" />
        </label>
        <button>Odeslat</button>
      </form>
    </>
  );
};
