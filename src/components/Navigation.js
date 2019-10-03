import React from 'react';
import { List } from '@react95/core';
import styled from 'styled-components'

const NavContainer = styled.nav`
  z-index: 2;
  position: absolute;
  bottom: 48px;
  left: 9px;
  min-width: 280px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: initial;
  &:visited {
    color: initial;
  }
`

export function useNav() {
  const [isActive, setIsActive] = React.useState(false);
  function toggleNav() {
    setIsActive(!isActive);
  }

  return [isActive, toggleNav];
}

export default function Navigation() {
  return (
    <NavContainer>
      <List>
        <StyledLink
          href="https://github.com/jchiatt/endofie/issues"
          target="_blank"
        >
          <List.Item icon="user">Suggest</List.Item>
        </StyledLink>
        <StyledLink href="mailto:jc+endofie@jchiatt.com">
          <List.Item icon="star">Sponsor</List.Item>
        </StyledLink>
        <StyledLink href="https://twitter.com/endofie">
          <List.Item icon="recycle_full">Twitter</List.Item>
        </StyledLink>
        <List.Divider />
        <List.Item icon="mic">Party Now</List.Item>
        <List.Item icon="warning">Do NOT Click</List.Item>
        <List.Divider />
        <List.Item icon="computer_3">Shut Down...</List.Item>
      </List>
    </NavContainer>
  )
}