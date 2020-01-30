import React from 'react';
import styled from "styled-components";
import { useClippy } from 'use-clippy-now';
import { PartyContext } from '../contexts/PartyContext';
import useParty from '../hooks/useParty';
import VisitorCounter from './VisitorCounter';
import SpinningLogo from './SpinningLogo';
import Paint from './Paint';
import getRandomColor from '../util/getRandomColor'
import { ModalContext } from '../contexts/ModalContext';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1000px) {
    max-width: 660px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
`

const Background = styled.div`
  overflow: hidden;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: ${props => (props.color ? props.color : getRandomColor())};
`

const Title = styled.h1`
  border: 1px solid #111;
  border-radius: 1rem;
  padding: 2rem;
  background-color: #111;
  color: #fff;
  font-size: 1.5rem;
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

const Footer = styled.footer`
  width: calc(100% - 2rem);
  margin-top: 0.75rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  text-align: center;

  @media screen and (min-width: 375px) {
    position: absolute;
    bottom: 3rem;
    left: 0;
  }
`

export default function DesktopBackground({ children }) {
  const { color, isPlaying, partyTime, togglePartyTime } = useParty();
  const [detailsModalActive, setDetailsModalActive] = React.useState(false);
  const withClippy = useClippy("Clippy");

  return (
    <PartyContext.Provider
      value={{
        togglePartyTime: () => {
          togglePartyTime()
        },
        isPlaying,
      }}
    >
      <ModalContext.Provider
        value={{
          showDetailsModal: () => setDetailsModalActive(true),
          hideDetailsModal: () => setDetailsModalActive(false),
          detailsModalActive,
        }}
      >
        <Background color={color}>
          <Inner>
            <LogoContainer>
              <SpinningLogo partyTime={partyTime} />
              <Title>Welcome to the End of IE Party</Title>
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
              & <a href="https://twitter.com/_kaylasween">Kayla Sween</a>. This
              site currently works <strike>best</strike> in Chrome on desktop.
            </p>
          </Footer>
        </Background>
      </ModalContext.Provider>
    </PartyContext.Provider>
  )
}