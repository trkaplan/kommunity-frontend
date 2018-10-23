import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { white, lightGray } from '@/css/common';

import {
  NavBar,
  Logo,
  PrimaryMenu,
  SecondaryMenu,
  StyledNavlink,
  SearchBox,
  Button,
} from './header-styled';

class Header extends Component {
  render() {
    return (
      <NavBar>
        <StyledNavlink to="/"><Logo>Kommunity.App</Logo></StyledNavlink>
        <PrimaryMenu>
          <StyledNavlink to="/">Features</StyledNavlink>
          <StyledNavlink to="/">Solutions</StyledNavlink>
          <StyledNavlink to="/">Communities</StyledNavlink>
        </PrimaryMenu>
        <SecondaryMenu>
          <SearchBox />
          <StyledNavlink to="/login">Login</StyledNavlink>
          <StyledNavlink to="/"><Button>Sign Up</Button></StyledNavlink>
        </SecondaryMenu>
      </NavBar>
    );
  }
}

export default Header;
