import { connect } from 'react-redux'
import Searchbar from './Searchbar';
import { searchPlace, searchPlaceClear } from '../actions/searchPlaceActions'
import { addPlace } from '../actions/myPlacesActions'
import { fetchForecast } from '../actions/forecastActions'


const mapStateToProps = (state) => ({
  keyword: state.searchPlace.keyword,
  places: state.searchPlace.results
})

const mapDispatchToProps = (dispatch) => ({
  onSearch: (keyword) => dispatch(searchPlace(keyword)),
  onSelect: (place) => {
    dispatch(searchPlaceClear());
    dispatch(addPlace(place));
    dispatch(fetchForecast(place.id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)
