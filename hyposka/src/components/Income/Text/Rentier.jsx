import React from 'react';
import { Link } from 'react-router-dom';

export const Rentier = () => {
  return (
    <>
      <p>Tady tě pošlu hned do banky, protože to asi nebude úplně jednoduché</p>

      <Link to="/vydaje">
        <button>3. Vydaje</button>
      </Link>
    </>
  );
};
