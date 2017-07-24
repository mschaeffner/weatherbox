import axios from 'axios'


export const SEARCH_PLACE_CLEAR = 'SEARCH_PLACE_CLEAR'
export const SEARCH_PLACE = 'SEARCH_PLACE'
export const SEARCH_PLACE_SUCCESS = 'SEARCH_PLACE_SUCCESS'
export const SEARCH_PLACE_FAILURE = 'SEARCH_PLACE_FAILURE'

export const searchPlaceClear = (keyword) => (dispatch) => {
  dispatch({
    type: SEARCH_PLACE_CLEAR
  })
}

const searchPlaceSuccess = (data) => ({
  type: SEARCH_PLACE_SUCCESS,
  payload: data || []
})

const searchPlaceFailure = (error) => ({
  type: SEARCH_PLACE_FAILURE,
  payload: error
})

export const searchPlace = (keyword) => (dispatch) => {
  dispatch({
    type: SEARCH_PLACE,
    payload: keyword
  })
  return axios.get(`http://metmoji.us-east-1.elasticbeanstalk.com/api/v1/cities?q=${keyword}`)
    .then(response => dispatch(searchPlaceSuccess(response.data)))
    .catch(error => dispatch(searchPlaceFailure(error.data || error)))
}
