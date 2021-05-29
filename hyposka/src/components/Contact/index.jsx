import React from 'react';
import { Slavka } from './text/slavka.jsx';
import { Veru } from './text/veru.jsx';
import { ContactCard } from '../ContactCard';
import { FormContact } from './../FormContact/index';

import { slavka } from '../img/slavka.jpg';
import { verca } from '../img/veru.png';
import './style.css';

export const Contact = () => {
  return (
    <>
      <main>
        <h1>Kontakty</h1>
        <h2>Slávka Vavřinová</h2>

        <ContactCard
          photo={slavka}
          alt="Slávka"
          title="Slávka Vavřinová"
          text="Jsem mamka na mateřské dovolené se syny Marečkem 2 roky a Martínkem 4 roky. Před mateřskou jsem pracovala přibližně 10 let v bance. Na všech pozicích mě vždy provázely hypotéky. Z různých
          témat k projektu Verča vybrala právě mnou nadhozenou Appku HYPOŠKU."
        >
          <Slavka />
        </ContactCard>

        <h2>Verča Sípalová</h2>
        <ContactCard
          photo={verca}
          alt="Verča"
          title="Verča Sípalová"
          text="Jmenuji se Verča, jsem z Českých Budějovic. Doma mám dvě nezbedné děti Adélku a Honzíka. V předchozích letech jsem vystřídala více zaměstnání, spíše administrativních. Ráda bych do budoucna změnu, a mít možnost rozhodnout si o své pracovní době kdy se mohu věnovat práci a kdy dětem."
        >
          <Veru />
        </ContactCard>
        <p>Máš pro nás radu? Napiš, budeme rády!</p>
        <FormContact />
      </main>
    </>
  );
};
