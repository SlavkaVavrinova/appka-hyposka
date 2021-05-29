import './style.css';

import React, { useEffect, useState } from 'react';
import { db } from './../../db';
import firebase from 'firebase/app';
import validator from 'validator';

export const FormMap = () => {
  const [name, setName] = useState('');
  const [select, setSelect] = useState('bankéř');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (responseEmail && name && comment) {
      db.collection('poradci')
        .add({
          name: name,
          select: select,
          email: email,
          address: address,
          comment: comment,
          phone: phone,
          datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
        })

        .then(() => {
          setResponse(
            `Formulář byl úspěšně odeslán, po schválení bude vložen do mapy.`,
          );
        })
        .catch(() => {
          setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
        });

      setName('');
      setSelect('');
      setEmail('');
      setPhone('');
      setAddress('');
      setComment('');
    } else {
      setResponse('Dopňte chybějící požadované údaje');
    }
  };

  const [responseEmail, setResponseEmail] = useState(true);

  const validEmail = responseEmail !== true ? 'Zatejte platný email' : '';

  useEffect(() => {
    setResponseEmail(validator.isEmail(email));
  }, [email]);

  const [responsePhone, setResponsePhone] = useState(true);

  const validPhone = responsePhone !== true ? 'Zatejte platný telefon' : '';

  useEffect(() => {
    setResponsePhone(validator.isMobilePhone(phone));
  }, [phone]);

  return (
    <>
      <form className="form-map" onSubmit={handleSubmit}>
        <label className="form-map__select">
          Osoba je:
          <select
            name="Vyber poradce"
            value={select}
            onChange={(event) => setSelect(event.target.value)}
          >
            <option value="bankéř" selected="selected">
              Pracovník banky
            </option>
            <option value="poradce">Finanční poradce</option>
          </select>
        </label>

        <label className="form-map__name">
          Jméno bankéře/poradce <span className="required">*</span>
        </label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <div className="valid">
          <label className="form-map__phone">
            Telefonní kontakt bankéře/poradce
          </label>
          <span> {validPhone}</span>
        </div>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <div className="valid">
          <label className="form-map__email">
            E-mail bankéře/poradce <span className="required">*</span>
          </label>
          <span> {validEmail}</span>
        </div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="form-map__address">Zadej adresu</label>
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />

        <label>
          Zadej komentář se zkušeností <span className="required">*</span>
        </label>
        <textarea
          className="form-map__comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={5}
        />

        <button>Odeslat</button>
        <p>{response}</p>
      </form>
    </>
  );
};
