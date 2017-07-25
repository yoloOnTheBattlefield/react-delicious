

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarInner,
  LinksContainer,
  Home,
  Item,
  AuthContainer
} from './Navbar.styles'

export default () => {
  return (
    <Navbar>
      <NavbarInner>
        <Home to='/'>Delicious</Home>
        <LinksContainer>
          <Link to='/stores'>
            <Item>Stores</Item>
          </Link>
          <Link to='/tags'>
            <Item>Tags</Item>
          </Link>
          <Link to='/top'>
            <Item>Top</Item>
          </Link>
          <Link to='/add'>
            <Item>Add</Item>
          </Link>
          <Link to='/map'>
            <Item>Map</Item>
          </Link>
        </LinksContainer>
        <AuthContainer>
          <Item to='/signup'>Sign Up</Item>
          <Item to='/login'>Login</Item>
        </AuthContainer>
      </NavbarInner>
    </Navbar>
  )
}
