import React from 'react';
import { List } from '@react95/core';
import styled from 'styled-components'
import { PartyContext } from "../contexts/PartyContext"
import { ModalContext } from '../contexts/ModalContext';

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

export default function Navigation({ toggleNav }) {
  const { togglePartyTime, isPlaying } = React.useContext(PartyContext);
  const { showDetailsModal } = React.useContext(ModalContext);
  
  return (
    <NavContainer>
      <List>
        <List.Item
          icon="mic"
          onClick={() => {
            togglePartyTime();
            toggleNav();
          }}
          style={{ cursor: "pointer" }}
        >
          {isPlaying ? "Stop the Party :-(" : "Party Now"}
        </List.Item>
        <List.Item
          icon="info_bubble"
          onClick={() => {
            showDetailsModal();
            toggleNav();
          }}
          style={{ cursor: "pointer" }}
        >
          Show Details
        </List.Item>
        <List.Divider />
        <StyledLink
          href="https://mailchi.mp/77f84180ff5c/endofie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <List.Item icon="mail">Get Updates</List.Item>
        </StyledLink>
        <StyledLink
          href="https://github.com/jchiatt/endofie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <List.Item icon="user">Contribute</List.Item>
        </StyledLink>
        <StyledLink href="mailto:jc+endofie@jchiatt.com">
          <List.Item icon="star">Sponsor</List.Item>
        </StyledLink>
        <StyledLink href="https://twitter.com/endofie">
          <List.Item icon="recycle_full">Twitter</List.Item>
        </StyledLink>
      </List>
    </NavContainer>
  )
}