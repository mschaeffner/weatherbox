import React from 'react';
import { Panel } from 'react-bootstrap';
import MyPlacesItem from './MyPlacesItem';


export default ({places, onSelect}) =>
  <Panel header="My places">
      {places.length===0 && <i>No place selected</i>}
      {places.map(place =>
        <MyPlacesItem key={place.id} place={place} onSelect={(id) => onSelect(id)} />
      )}
  </Panel>
