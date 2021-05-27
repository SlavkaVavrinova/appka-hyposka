import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import bankPoint from './img/bankPoint.svg';
import consultantPoint from './img/consultantPoint.svg';

export const MapBox = () => {
  const [viewport, setViewport] = useState({
    latitude: 48.9747357,
    longitude: 14.474285,
    zoom: 15,
  });

  const bodZajmu = {
    nazev: 'Náměstí České Budějovice',
    latitude: 48.974643727964256,
    longitude: 14.473364057153596,
  };

  const restaurace = [
    {
      id: 1,
      nazev: 'Eva ',
      latitude: 48.974598,
      longitude: 14.479637,
      ikonka: bankPoint,
    },
    {
      id: 2,
      nazev: 'Šárka',
      latitude: 48.815727,
      longitude: 14.314896,
      ikonka: bankPoint,
    },
    {
      id: 3,
      nazev: 'Léni paní',
      latitude: 49.316744,
      longitude: 14.245258,
      ikonka: consultantPoint,
    },
    {
      id: 4,
      nazev: 'CK',
      latitude: 48.8193497,
      longitude: 14.31946,
      ikonka: consultantPoint,
    },
  ];

  return (
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
      {restaurace.map((person) => (
        <React.Fragment key={person.id}>
          <Marker
            latitude={person.latitude}
            longitude={person.longitude}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <img src={person.ikonka} width={50} height={50} alt="" />
          </Marker>
          <Popup
            offsetTop={-60}
            latitude={person.latitude}
            longitude={person.longitude}
          >
            {person.nazev}
          </Popup>
        </React.Fragment>
      ))}
    </ReactMapGL>
  );
};
