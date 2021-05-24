import React from 'react';
import { Link } from 'react-router-dom';

export const Revenue = () => {
  return (
    <>
      <p>
        Vezmi <strong>oznámení, kde se objeví výše příspěvku.</strong> Zde
        pozor, tuto formu bude banka akceptovat jako nějaké doplnění hlavního
        příjmu. Pravděpodobně nebude schopná hypotéku poskytnout jen na tento
        příjem. Ale i zde platí, vše potřebné se dozvíš až u konkrétní banky.
      </p>

      <Link to="/vydaje">
        <button>3. Vydaje</button>
      </Link>
    </>
  );
};
