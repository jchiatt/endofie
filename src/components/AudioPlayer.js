import React from 'react';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  display: flex;
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
`;


export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  function handleClick() {
    setIsPlaying(!isPlaying);
  }

  React.useEffect(() => {
    const player = document.querySelector('#player');
    if (isPlaying) {
      player.play()
    }
    return () => player.pause();
  }, [isPlaying]);

  return (
    <PlayerWrapper>
      <audio id="player" loop>
        <source src="/microwave-robocop.wav" type="audio/wav" />
      </audio>
      <Button onClick={handleClick} >{isPlaying ? "Pause" : "Play"}</Button>
      {isPlaying && <SongTitle>Microwave Robocop - Ken Wheeler</SongTitle>}
    </PlayerWrapper>
  )
}