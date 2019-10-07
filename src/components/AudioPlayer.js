import React from 'react';
import styled from 'styled-components';
import { PartyContext } from "../contexts/PartyContext"

const PlayerWrapper = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  display: ${props => props.isPlaying ? 'flex' : 'none'};
  align-items: center;
  height: 80px;
  padding: 0 2rem;
  background-color: lightgrey;
`;

const SongTitle = styled.marquee`
  font-family: monospace;
  font-size: 1.5rem;
  color: #111;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #111;
  color: white;
  min-width: 14rem;

  margin-right: 2rem;

  span {
    vertical-align: middle;
    font-size: 1rem;
  }
`


export default function AudioPlayer() {
  const { togglePartyTime, isPlaying } = React.useContext(PartyContext)
  
  return (
    <PlayerWrapper isPlaying={isPlaying}>
      <audio id="player" loop preload="auto">
        <source src="/microwave-robocop.wav" type="audio/wav" />
      </audio>
      {isPlaying && (
        <Button onClick={togglePartyTime}>
          <span>
            Stop the Party <span role="img">☹️</span>
          </span>
        </Button>
      )}
      {isPlaying && <SongTitle>Microwave Robocop - Ken Wheeler</SongTitle>}
    </PlayerWrapper>
  )
}