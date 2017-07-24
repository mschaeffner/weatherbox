import {
  FETCH_FORECAST,
  FETCH_FORECAST_SUCCESS,
  FETCH_FORECAST_FAILURE
} from '../actions/forecastActions'


const INITIAL_STATE = {
  result: null,
  error: null,
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_FORECAST:
      return {
        result: null,
        error: null,
        loading: true
      }

    case FETCH_FORECAST_SUCCESS:
      return {
        result: action.payload,
        error: null,
        loading: false
      }

    case FETCH_FORECAST_FAILURE:
      return {
        result: null,
        error: action.payload,
        loading: false
      }

    default:
      return state
  }
}
