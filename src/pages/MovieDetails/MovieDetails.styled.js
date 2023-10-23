import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;

  font-weight: 500;
  font-size: 18px;

  border-radius: 4px;
  text-decoration: none;

  cursor: pointer;

  &.active {
    color: white;
    background-color: black;
  }
`;
