import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import {
  Navbar,
  NavbarInner,
  Home
} from './Navbar.styles'

export default () => {
  return (
    <Navbar>
      <NavbarInner>
        <Home to='/'>Delicious</Home>
        <Link to='/stores'>Stores</Link>
        <Link to='/tags'>Tags</Link>
        <Link to='/top'>Top</Link>
        <Link to='/add'>Add</Link>
        <Link to='/map'>Map</Link>
      </NavbarInner>
    </Navbar>
  )
}
