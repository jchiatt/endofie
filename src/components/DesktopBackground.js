import React from 'react';
import styled from "styled-components";
import VisitorCounter from './VisitorCounter';

function getRandomColor() {
  return '#' + Math.random().toString(16).substring(2, 8);
}

const Background = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.color ? props.color : getRandomColor()};
  background-image: url('/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  &:after {
    content: 'WELCOME TO THE END OF IE PARTY';
    position: absolute;
    top: calc(50% + 300px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    padding: 2rem;
    font-size: 4rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    background-color: #111;
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
`;

export default function DesktopBackground({ children }) {
  const [color, setColor] = React.useState(getRandomColor());
  
  React.useEffect(() => {
    let interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000);
    return () => clearInterval(interval);
  }, [color]);


  return <Background color={color}>
    {children}
    <Footer>
      <VisitorCounter />
    </Footer>
    </Background>
}