import React, { useState } from 'react';

export const HypoCalculator = () => {
  const [osoba, setOsoba] = useState(3860);

  const [pocetOsob, setPocetOsob] = useState(0);
  const [pocet6Deti, setPocet6Deti] = useState(0);
  const [pocet15Deti, setPocet15Deti] = useState(0);
  const [pocet26Deti, setPocet26Deti] = useState(0);

  console.log(pocetOsob);

  const livingMinimum =
    osoba +
    pocetOsob * 3200 +
    pocet6Deti * 1970 +
    pocet15Deti * 2420 +
    pocet26Deti * 2770;

  return (
    <>
      <h2>HYPOŠKALKULAČKA</h2>
      <p>
        Žádáš s manželkou/manželem, partnerkou/partnerem - příjmy sečti, výdaje
        také
      </p>
      <h3>Životní minimum rodiny</h3>
      <div className="form-costs">
        <label className="form-cost__select">
          Vyber kolik osob bude žádat o hypotéku
          <select
            name="person"
            value={osoba}
            onChange={(event) => {
              setOsoba(Number(event.target.value));
            }}
          >
            <option value={3860}>O hypotéku žádám sám</option>
            <option value={3550}>
              O hypotéku žádám s někým z mé domácnosti
            </option>
          </select>
        </label>
        <label>
          Kolik dalších osob ze společné domácnosti bude o hypotéku žádat
          <input
            type="number"
            name="pocetOsob"
            min={0}
            value={pocetOsob}
            onChange={(event) => {
              setPocetOsob(Number(event.target.value));
            }}
          />
        </label>
        <label>
          Kolik je v domácnosti dětí do 6 let
          <input
            type="number"
            name="pocet6Deti"
            min={0}
            value={pocet6Deti}
            onChange={(event) => {
              setPocet6Deti(Number(event.target.value));
            }}
          />
        </label>
        <label>
          Kolik je v domácnosti dětí od 6 do 15 let
          <input
            type="number"
            name="pocet15Deti"
            min={0}
            value={pocet15Deti}
            onChange={(event) => {
              setPocet15Deti(Number(event.target.value));
            }}
          />
        </label>
        <label>
          Kolik je v domácnosti dětí 15 - 26 let (nezaopatřených)
          <input
            type="number"
            name="pocet26Deti"
            min={0}
            value={pocet26Deti}
            onChange={(event) => {
              setPocet26Deti(Number(event.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-costs__container-minimum">
        <p>
          <strong>Celkové životní minimum je</strong>
        </p>
        <p className="form-costs__minimum">{`${livingMinimum} Kč`}</p>
      </div>

      <div className="form-costs">
        <label>
          Součet pravidelných <strong>výdajů</strong> žadatelů{' '}
          <input type="number" min={0} />
        </label>

        <label>
          Součet průměrných <strong>příjmů</strong> žadatelů{' '}
          <input type="number" min={0} />
        </label>
      </div>
    </>
  );
};
