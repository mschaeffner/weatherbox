import axios from 'axios'


export const FETCH_FORECAST = 'FETCH_FORECAST'
export const FETCH_FORECAST_SUCCESS = 'FETCH_FORECAST_SUCCESS'
export const FETCH_FORECAST_FAILURE = 'FETCH_FORECAST_FAILURE'

const fetchForecastSuccess = (data) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: data
})

const fetchForecastFailure = (error) => ({
  type: FETCH_FORECAST_FAILURE,
  payload: error
})

export const fetchForecast = (placeId) => (dispatch) => {
  dispatch({ type: FETCH_FORECAST })
  return axios.get(`http://metmoji.us-east-1.elasticbeanstalk.com/api/v1/forecasts/${placeId}`)
    .then(response => dispatch(fetchForecastSuccess(response.data)))
    .catch(error => dispatch(fetchForecastFailure(error.data || error)))
}
