import React from 'react';
import { analyze } from "web-audio-beat-detector"
import getRandomColor from '../util/getRandomColor'

async function getTempo() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  const source = "/microwave-robocop.wav"

  const data = await fetch(source)
  const arrayBuffer = await data.arrayBuffer()
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)

  const tempo = Math.ceil(await analyze(audioBuffer))

  return tempo
}

export default function useParty() {
  const [isPlaying, setIsPlaying] = React.useState(false)
  /* eslint-disable-next-line no-unused-vars */
  const [_, setTempo] = React.useState(null)
  const [
    beatsPerSecondInMilliseconds,
    setBeatsPerSecondInMilliseconds,
  ] = React.useState(null)
  const [color, setColor] = React.useState(getRandomColor())
  const [partyTime, setPartyTime] = React.useState(false)

  function togglePartyTime() {
    setPartyTime(!partyTime)
    setIsPlaying(!isPlaying)
  }

  // calculate music tempo
  React.useEffect(() => {
    getTempo().then(tempo => {
      setTempo(tempo)
      setBeatsPerSecondInMilliseconds(1000 / (tempo / 60))
    })
  }, [])

  // play the music
  React.useEffect(() => {
    const player = document.querySelector("#player")
    if (isPlaying) {
      player.play()
    }
    return () => player.pause()
  }, [isPlaying])

  // set random background color and change on beat
  React.useEffect(() => {
    if (!beatsPerSecondInMilliseconds) return;
    let interval = null

    if (partyTime) {
      interval = setInterval(() => {
        setColor(getRandomColor())
      }, beatsPerSecondInMilliseconds)
    }

    return () => clearInterval(interval)
  }, [partyTime, beatsPerSecondInMilliseconds])

  return {color, partyTime, isPlaying, togglePartyTime}
}
