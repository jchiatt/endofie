import React from 'react';
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #55aaaa;
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  &:after {
    content: 'WELCOME TO THE END OF IE PARTY';
    position: absolute;
    top: calc(50% + 300px);
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
`

export default function DesktopBackground({ children }) {
  return <Background>{children}</Background>
}