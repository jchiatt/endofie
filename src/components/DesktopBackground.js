import React from 'react';
import styled from "styled-components";
import VisitorCounter from './VisitorCounter';

function getRandomColor() {
  return '#' + Math.random().toString(16).substring(2, 8);
}

const Background = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.color ? props.color : getRandomColor())};
  background-image: url("/logo.png");
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1000px) {
    background-size: 50%;
  }

  &:after {
    content: "WELCOME TO THE END OF IE PARTY";
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

    @media screen and (max-width: 1000px) {
      top: calc(50% + 150px);
      width: 50%;
      padding: 1rem;
      font-size: 1rem;
    }
  }
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: calc(100% - 2rem);
  padding: 1rem;
  text-align: center;
`

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