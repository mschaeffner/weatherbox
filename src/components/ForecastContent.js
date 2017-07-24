import React from 'react';
import moment from 'moment';


const kelvinToCelsius = (kelvin) => kelvin - 273

export default ({data}) =>
  <div>
    {data.list.map(entry =>
      <div key={entry.dt}>
        {moment.unix(entry.dt).format("DD.MM.YYYY HH:mm")}
        <img alt='icon' src={'http://openweathermap.org/img/w/' + entry.weather[0].icon + '.png'} />
        {entry.weather[0].description + ' and ' + Math.round(kelvinToCelsius(entry.main.temp)) + '°C'}
      </div>
    )}
  </div>
