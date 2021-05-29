import './style.css';

import React, { useEffect, useState } from 'react';
import { db } from './../../db';
import firebase from 'firebase/app';
import isEmail from 'validator/lib/isEmail';
import validator from 'validator';

export const FormContact = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState([]);
  const [response, setResponse] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    db.collection('kontakt')
      .add({
        name: name,
        email: email,
        message: message,
        datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
      })

      .then(() => {
        setResponse(
          `Formulář byl úspěšně odeslán, odpověď dorazí na email: ${email}`,
        );
      })
      .catch(() => {
        setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
      });

    setName('');
    setEmail('');
    setMessage('');
    setResponse('display__yes');
  };

  const [responseEmail, setResponseEmail] = useState(true);

  const validEmail = responseEmail !== true ? 'Zatejte platný email' : '';

  useEffect(() => {
    setResponseEmail(validator.isEmail(email));
  }, [email]);

  return (
    <>
      <form className="form-contact" onSubmit={handleSubmit}>
        <label className="form-contact__name">Jméno: {''}</label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <div className="email-valid">
          <label className="form-contact__email">Email: {''}</label>
          <span> {validEmail}</span>
        </div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="form-map__message">Vzkaz či doporučení: {''}</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
        />
        <button>Odeslat</button>
        <p>{response}</p>
      </form>
    </>
  );
};
