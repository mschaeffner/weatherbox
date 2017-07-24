import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Header from './Header';
import MyPlacesContainer from './MyPlacesContainer';
import ForecastContainer from './ForecastContainer';


export default () =>
  <div>
    <Header />
    <Grid>
      <Row className="show-grid">
        <Col xs={12} sm={3}>
          <MyPlacesContainer />
        </Col>
        <Col xs={12} sm={9}>
          <ForecastContainer />
        </Col>
      </Row>
    </Grid>
  </div>
