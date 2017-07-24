import React from 'react';
import { Panel } from 'react-bootstrap';
import ForecastContent from './ForecastContent';


const getHeader = (forecast) => {
  if(forecast.loading) {
    return 'Forecast loading ...'
  }

  if(forecast.error) {
    return 'Error loading forecast :-('
  }

  if(forecast.result) {
    return 'Forecast for ' + forecast.result.city.name
  }
}

export default ({forecast}) =>
  <Panel header={getHeader(forecast)}>
    {forecast.result && <ForecastContent data={forecast.result} />}
  </Panel>
