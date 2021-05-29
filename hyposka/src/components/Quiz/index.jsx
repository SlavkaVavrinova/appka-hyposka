import React from 'react';
import { Questions } from '../Questions/questions.jsx';
import './style.css';
import Castle from './img/castle.svg';
import Ruin from './img/ruin.svg';
import Tent from './img/tent.svg';
import Flat from './img/flat.svg';
import House from './img/house.svg';

export const Quiz = () => {
  return (
    <>
      <main>
        <h1>Kvíz</h1>
        <h2>
          Vyzkoušej své znalosti. Každá správná odpověď tě posune o krok blíž k
          lepšímu bydlení.
        </h2>

        <Questions
          key="Question1"
          title="Co je to hypoška?"
          textA="Hypoteční úvěr na bydlení."
          textB="Úvodní fáze při hypnóze."
          photo={Ruin}
        ></Questions>
        <Questions
          key="Question2"
          photo={Tent}
          title="Co je to fixace?"
          textA="Doba, pro kterou bude platit sjednaný úrok."
          textB="Když muž potká ženu, tak mezi nimi vznikne fixace."
        ></Questions>
        <Questions
          key="Question3"
          photo={Flat}
          title="Jaká fixace úroku je nejlepší?"
          textA="Variabilní."
          textB="Čím delší, tím lepší."
        ></Questions>
        <Questions
          key="Question4"
          photo={House}
          title="Kde najdeš nejlevnější hypotéku?"
          textA="Každá banka má v různý moment jinou sazbu. Je tedy buď na tobě si banky obejít nebo si sehnat nějakého finančního poradce"
          textB="Zeptám se souseda či kamaráda."
        ></Questions>
        <Questions
          key="Question5"
          photo={Castle}
          title="Co je zástavní smlouva?"
          textA="Smlouva, která se vystaví po podpisu smlouvy o hypotéce."
          textB="Když zastavím na zákazu zastavení, tak mi ji vystaví policie ČR, aby mi pomohla a ochránila mě."
        ></Questions>
      </main>
    </>
  );
};
