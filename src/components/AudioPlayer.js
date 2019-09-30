import React from 'react';
import styled from 'styled-components';
import { analyze } from 'web-audio-beat-detector';
import { PartyContext } from '../contexts/PartyContext';

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

async function getTempo() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  const source = "/microwave-robocop.wav"

  const data = await fetch(source)
  const arrayBuffer = await data.arrayBuffer()
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

  const tempo = Math.ceil(await analyze(audioBuffer))

  console.log(tempo)

  return tempo
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [tempo, setTempo] = React.useState(null);
  const [beatsPerSecondInMilliseconds, setBeatsPerSecondInMilliseconds] = React.useState(null);
  const { changeBackgroundColor } = React.useContext(PartyContext)

  function handleClick() {
    setIsPlaying(!isPlaying)
  }

  React.useEffect(() => { 
    getTempo().then(tempo => {
      setTempo(tempo);
      setBeatsPerSecondInMilliseconds(1000 / (tempo / 60));
    })
   }, []);

  React.useEffect(() => {
    const player = document.querySelector('#player');
    if (isPlaying) {
      player.play()
    }
    return () => player.pause();
  }, [isPlaying]);

  React.useEffect(() => {
    let interval = null;
    console.log('bps', beatsPerSecondInMilliseconds)

    if (isPlaying) {
      interval = setInterval(() => {
        changeBackgroundColor();
      }, beatsPerSecondInMilliseconds);
    }

    return () => clearInterval(interval);
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