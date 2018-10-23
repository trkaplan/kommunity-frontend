import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { white, lightGray } from '@/css/common';

export const NavBar = styled.header`
  display: flex;
  align-items: center;
  min-height: 4rem;
  background-color: ${white};
`;

export const Logo = styled.div`
  line-height: inherit;
  color: ${lightGray};
  text-decoration: none;
  font-weight: bold;
`;

export const PrimaryMenu = styled.div`
  display: flex;
`;

export const StyledNavlink = styled(NavLink)`
  color: ${lightGray};
  text-decoration: none;
  display:inline-block;
  padding: .5rem 1rem;
`;

export const SecondaryMenu = styled.div`
  margin-left: auto!important;
`;

export const SearchBox = styled.input.attrs({
  placeholder: 'Search Communities',
})`
  position: relative;
  border: 1px solid #ced4da;
  padding: .375rem .75rem;
  border-radius: .25rem;
  font-size: 1rem;
  color: ${lightGray};
`;

// TODO(@trkaplan): Replace Button after creating a UI Component Library
export const Button = styled.button`  
  font-weight: bold;
  color: ${lightGray};
  padding: .375rem .75rem;
  border: 1px solid transparent;
  border-color: ${lightGray};
  border-radius: .25rem
`;
