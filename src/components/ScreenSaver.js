import React from 'react';
import styled from 'styled-components';

const ScreenSaverContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0; right: 0; bottom: 0; left: 0;
  background-color: #111;
  z-index: 9998;
`;

const Logo = styled.div`
  width: 500px;
  height: 500px;
  background-image: url('/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 9999;
`

export default function ScreenSaver() {
  const [screenSaverActive, setScreenSaverActive] = React.useState(false);

  function pauseScreenSaver() {
    setScreenSaverActive(false);
  }

  function startScreenSaver() {
    setScreenSaverActive(true);
  }

  React.useEffect(() => {
    if (screenSaverActive) {
      window.addEventListener("mousedown", pauseScreenSaver);
      window.addEventListener("mousemove", pauseScreenSaver);
    }
    return () => {
      window.removeEventListener("mousedown", pauseScreenSaver)
      window.removeEventListener("mousemove", pauseScreenSaver);
    }
  }, [screenSaverActive]);

  React.useEffect(() => {
    const TIMEOUT_DURATION = 60000;
    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
    ];
    let timer = null;
    startTimer();
    
    function startTimer() {
      timer = setTimeout(startScreenSaver, TIMEOUT_DURATION);
    }

    function resetTimer() {
      if (timer) clearTimeout(timer);
      startTimer();
    }

    if (!screenSaverActive) {
      events.forEach(function(name) {
        document.addEventListener(name, resetTimer, true)
      });
    }

    return () => {
      clearTimeout(timer);
      events.forEach(function(name) {
        document.removeEventListener(name, resetTimer);
      })
    }
  }, [screenSaverActive]);

  
  if (!screenSaverActive) return null;
  
  return (
    <ScreenSaverContainer aria-hidden="true">
      <marquee
        direction="down"
        behavior="alternate"
        height="100%"
        width="100%"
        scrollamount="10"
      >
        <marquee behavior="alternate" scrollamount="10">
          <Logo />
        </marquee>
      </marquee>
    </ScreenSaverContainer>
  )
}