import React from 'react';

export default ({place, onSelect}) =>
  <a key={place.id} style={styles.link} onClick={() => onSelect(place.id)}>
    {place.name}
  </a>

const styles = {
  link: {
    cursor: 'pointer',
    display: 'block'
  }
}
