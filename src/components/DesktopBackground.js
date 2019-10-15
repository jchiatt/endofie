import React from 'react';
import styled from "styled-components";
import { Button } from '@react95/core';
import { PartyContext } from '../contexts/PartyContext';
import useParty from '../hooks/useParty';
import VisitorCounter from './VisitorCounter';
import SpinningLogo from './SpinningLogo';
import Paint from './Paint';
import getRandomColor from '../util/getRandomColor'

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  max-width: 660px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);
  img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
`

const Background = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.color ? props.color : getRandomColor())};
`;

const Title = styled.h1`
  min-width: 300px;
  border: 1px solid #111;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #111;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
    min-width: 480px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 4rem;
  }
`;

const CTAButton = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background-color: hotpink;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 3rem;
  width: calc(100% - 2rem);
  padding: 1rem;
  text-align: center;
  background-color: rgba(255,255,255,.5);
`

export default function DesktopBackground({ children }) {
  const {color, isPlaying, partyTime, togglePartyTime} = useParty();

  return (
    <PartyContext.Provider
      value={{
        togglePartyTime: () => {
          togglePartyTime()
        },
        isPlaying,
      }}
    >
      <Background color={color}>
        <Inner>
          <LogoContainer>
            <SpinningLogo />
            <Title>Welcome to the End of IE Party</Title>
            <a
              href="https://mailchi.mp/77f84180ff5c/endofie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CTAButton>Get email updates</CTAButton>
            </a>
          </LogoContainer>
        </Inner>
        {partyTime && <Paint />}
        {children}
        <Footer>
          <VisitorCounter />
          <p>
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            in Mississippi by{" "}
            <a
              href="https://twitter.com/jchiatt"
              target="_blank"
              rel="noopener noreferrer"
            >
              J.C. Hiatt
            </a>{" "}
            & <a href="https://twitter.com/_kaylasween">Kayla Sween</a>.
          </p>
          <p>
            This site currently works <strike>best</strike> in Chrome on
            desktop.
          </p>
        </Footer>
      </Background>
    </PartyContext.Provider>
  )
}