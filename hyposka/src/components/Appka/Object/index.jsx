import React from 'react';

import { Card } from '../Card/index';

export const Object = () => {
  console.log('jsem tu');
  return (
    <>
      <h1>ÚČEL HYPOTÉKY</h1>
      <p>Jaký je tvůj plán? Co zaplatíš hypotékou? Vyber si:</p>
      {purposes.map((purpose) => (
        <Card {...purpose} key={purpose.title} />
      ))}
    </>
  );
};

const purposes = [
  {
    photo: './img/buy-house.jpg',
    alt: 'Rodinný dům',
    title: 'Koupit dům',
    text: 'Chci koupit rodinný dům, kde plánuji bydlet. Pouze koupě bez rekonstrukce',
  },
  {
    photo: './img/land.jpg',
    alt: 'Stavební pozemek',
    title: 'Koupit stavební pozemek',
    text: 'Chci koupit pozemek, kde budu stavět, ale zatím ho jen kupuji.',
  },
];
