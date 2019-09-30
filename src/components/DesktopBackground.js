import React from 'react';
import styled from "styled-components";
import VisitorCounter from './VisitorCounter';
import SpinningLogo from './SpinningLogo';

function getRandomColor() {
  return '#' + Math.random().toString(16).substring(2, 8);
}

const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  max-width: 660px;
  position: absolute;
  top: 50%;
  left: 50%;
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
  const [color, setColor] = React.useState(getRandomColor());
  
  React.useEffect(() => {
    let interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);


  return (
    <Background color={color}>
      <Inner>
        <LogoContainer>
          <SpinningLogo />
          <Title>Welcome to the End of IE Party</Title>
        </LogoContainer>
      </Inner>
      {children}
      <Footer>
        <VisitorCounter />
      </Footer>
    </Background>
  )
}