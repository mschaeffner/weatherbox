import React from 'react'
import { Navbar } from 'react-bootstrap'
import SearchbarContainer from './SearchbarContainer';


export default () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Weatherbox
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Form pullLeft>
      <SearchbarContainer />
    </Navbar.Form>
  </Navbar>
