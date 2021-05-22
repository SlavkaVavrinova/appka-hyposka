import React from 'react';
import './style.css';

export const Header = () => {
  return (
    <>
      <header>
        <div className="banner">
          <h1>Appka HYPOŠKA</h1>
          <div>U bydlení kámoška</div>
          <p>
            Jednoduché kroky k vysněnému bydlení s hypotékou. Nejsem banka,
            finanční poradce, nic nenabízím!
            <strong>
              <br></br>Poskytuji informace
            </strong>
            , co tě se mnou čeká.
          </p>
          <button>Vstoupit</button>
        </div>
      </header>
    </>
  );
};
