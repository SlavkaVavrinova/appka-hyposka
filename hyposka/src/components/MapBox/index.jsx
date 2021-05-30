import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import bankPoint from './img/bankPoint.svg';
import consultantPoint from './img/consultantPoint.svg';

import { db } from './../../db';
import firebase from 'firebase/app';

export const MapBox = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 48.9747357,
    longitude: 14.474285,
    zoom: 7,
  });

  const bodZajmu = {
    nazev: 'Náměstí České Budějovice',
    latitude: 48.974643727964256,
    longitude: 14.473364057153596,
  };

  const [persons, setPersons] = useState([]);
  +useEffect(() => {
    const nahrajOsobu = db.collection('poradci').onSnapshot((snaptshot) => {
      // Tady jsme dostali data
      const dokumenty = snaptshot.docs;
      const dataPerson = dokumenty.map((dokument) => {
        const data = dokument.data();
        data.id = dokument.id;
        data.ikonka = data.typ === 'Bankéř/ka' ? bankPoint : consultantPoint;

        console.log(data);
        return data;
      });
      setPersons(dataPerson);
    });
    return nahrajOsobu;
  }, []);

  /*
  const persons = [
    {
      id: 1,
      nazev: 'Eva ',
      latitude: 48.974598,
      longitude: 14.479637,
      typ: 'Bankéř/ka',
      ikonka: bankPoint,
    },
    {
      id: 2,
      nazev: 'Šárka',
      latitude: 48.815727,
      longitude: 14.314896,
      typ: 'Bankéř/ka',
      ikonka: bankPoint,
    },
    {
      id: 3,
      nazev: 'Léni paní',
      latitude: 49.316744,
      longitude: 14.245258,
      typ: 'Finanční poradce/poradkyně',
      ikonka: consultantPoint,
    },
    {
      id: 4,
      nazev: 'CK',
      latitude: 48.8193497,
      longitude: 14.31946,
      typ: 'Finanční poradce/poradkyně',
      ikonka: consultantPoint,
    },
  ];*/
  const [otevrenyPopup, setOtevrenyPopup] = useState(null);

  const [filtr, setFiltr] = useState('Vše');

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={(novyViewport) => setViewport(novyViewport)}
        width="100%"
        height={400}
        mapStyle={{
          version: 8,
          sources: {
            'raster-tiles': {
              type: 'raster',
              tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
              tileSize: 256,
              attribution:
                'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
            },
          },
          layers: [
            {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 20,
            },
          ],
        }}
      >
        {persons
          .filter((person) => {
            if (filtr === 'Vše') {
              return true;
            }
            if (filtr === person.typ) {
              return true;
            }
            return false;
          })
          .map((person) => (
            <React.Fragment key={person.id}>
              <Marker
                latitude={person.latitude}
                longitude={person.longitude}
                offsetLeft={-25}
                offsetTop={-50}
              >
                <div
                  onClick={() => {
                    setOtevrenyPopup(person.id);
                  }}
                  className="mapa__marker"
                >
                  <img
                    onClick={props.viewPerson.bind(null, person)}
                    src={person.ikonka}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
              </Marker>
              {otevrenyPopup === person.id ? (
                <Popup
                  offsetTop={-60}
                  latitude={person.latitude}
                  longitude={person.longitude}
                  onClose={() => {
                    setOtevrenyPopup(null);
                  }}
                >
                  <h2>{person.name}</h2>
                  <p>{person.select}</p>
                </Popup>
              ) : null}
            </React.Fragment>
          ))}
      </ReactMapGL>
      <label htmlFor="">
        Zobrazit v mapě:
        <select
          value={filtr}
          onChange={(event) => setFiltr(event.target.value)}
        >
          <option>Vše</option>
          <option>Bankéř/ka</option>
          <option>Finanční poradce/poradkyně</option>
        </select>
      </label>
    </>
  );
};
