import React from 'react'
import Autocomplete from 'react-autocomplete';


const renderSearchResultItem = (place, isHighlighted) =>
  <div style={{ padding: '5px', background: isHighlighted ? '#EEE' : 'white' }}>
    {place.name + ' (' + place.country + ')'}
  </div>

export default ({keyword, places, onSearch, onSelect}) =>
  <div style={{position: 'absolute', zIndex:100}}>
    <Autocomplete
      inputProps={{style:styles.input, placeholder:'Search for a place' }}
      menuStyle={styles.input}
      getItemValue={(place) => place.id + ''}
      items={places}
      renderItem={(place, isHighlighted) => renderSearchResultItem(place, isHighlighted)}
      value={keyword}
      onChange={event => onSearch(event.target.value)}
      onSelect={(value, place) => onSelect(place)}
    />
  </div>

const styles = {
  input: {
    fontSize: '16px',
    padding: '5px',
    width: '300px'
  }
}
