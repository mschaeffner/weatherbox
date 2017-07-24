import {
  ADD_PLACE,
} from '../actions/myPlacesActions'


const INITIAL_STATE = {
  places: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ADD_PLACE:
      if(state.places.find(place => place.id === action.payload.id)) {
        return state
      } else {
        return { places: [ action.payload, ...state.places ] }
      }

    default:
      return state
  }
}
