import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <>
      <header>
        <div className="banner">
          <h1>Appka HYPOŠKA</h1>
          <div>U bydlení kámoška</div>
          <div>
            Jednoduché kroky k vysněnému bydlení s hypotékou. Nejsem banka,
            finanční poradce, nic nenabízím! Poskytuji informace, co tě se mnou
            čeká.
          </div>
          <button>Vstoupit</button>
        </div>
      </header>
    </>
  );
};
