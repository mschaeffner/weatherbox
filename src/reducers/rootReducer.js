import { combineReducers } from 'redux'
import searchPlaceReducer from './searchPlaceReducer'
import forecastReducer from './forecastReducer'
import myPlacesReducer from './myPlacesReducer'


export default combineReducers({
 searchPlace: searchPlaceReducer,
 forecast: forecastReducer,
 myPlaces: myPlacesReducer
});
