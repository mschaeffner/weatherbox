
export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (place) => (dispatch) => {
  dispatch({
    type: ADD_PLACE,
    payload: place
  })
}
