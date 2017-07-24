import { connect } from 'react-redux'
import MyPlacesList from './MyPlacesList'
import { fetchForecast } from '../actions/forecastActions'


const mapStateToProps = (state) => ({
  places: state.myPlaces.places
})

const mapDispatchToProps = (dispatch) => ({
  onSelect: (placeId) => dispatch(fetchForecast(placeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPlacesList)
