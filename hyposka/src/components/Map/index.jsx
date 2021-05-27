import React from 'react';
import { FormMap } from './../FormMap/index';
import { MapBox } from './../MapBox/index';

import './style.css';

export const Map = () => {
  return (
    <>
      <h1>Mapa poradců</h1>
      <p>
        Neboj žádné vyplňte formulář a kontaktuje Vás finační poradce tu není!
      </p>
      <p>
        Toto je mapa<em> "udělej si sám"</em>
      </p>
      <p>
        V mapě najdeš pracovníky z bank a finanční poradce, kteří umí hypotéky a
        jejich klienti jsou s nimi pokojeni. Jak jsme to zjistili? Pod mapou
        najdeš formulář, který můžeš vyplnit i ty. Máš v okolí někoho o kom víš,
        že hypotéky zpracovává a má spokojené kliety? Nebo ti někdo takový
        hypotéku zařizoval? Budeme velice rádi, když referenci na něj dodáš do
        naší mapy.
      </p>
      <p>Jak to funguje?</p>
      <p>
        Po vyplnění se poradce v mapě neukáže. Nelekej se, údaje se uloží,
        poradce kontaktujeme a s jeho souhlasem zveřejníme.{' '}
      </p>
      <p>
        Z toho plyne, prosím pouze o pozitivní zkušenost. Jistě se najdou i
        hororové příběhy, ale tady najdeš jen "top" poradce. Chceme se vyhnout
        změně na skládku těch špatných.
      </p>
      <h2></h2>

      <MapBox />

      <h3>Zadej poradce</h3>
      <p>Jsi spokojen se zpracovatelem hypotéky. Zadej svou zkušenost</p>
      <FormMap />
    </>
  );
};
