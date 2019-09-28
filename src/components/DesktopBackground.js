import React from 'react';
import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #55aaaa;
`

export default function DesktopBackground({ children }) {
  return <Background>{children}</Background>
}