import React from 'react';
import styled from 'styled-components';
import { Button as R95Button, Modal } from '@react95/core';
import usePaint from '../hooks/usePaint';
import getRandomColor from '../util/getRandomColor';

const StyledModal = styled(Modal)`
  top: 6rem;
  min-width: 500px;
  min-height: 500px;
  height: auto;
`;

const ColorPicker = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  list-style: none;
`;

const Color = styled.li`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => {
    if (props.color === "random") {
      return "linear-gradient(to bottom, orange, yellow, green, cyan, blue, violet)"
    }
    return props.color
  }};
  ${props =>
    props.activeColor === props.color
      ? `box-shadow: 0px 0px 16px 4px ${props.color};`
      : null}
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 16px 4px ${props => {
      return props.color === "random" 
        ? props.activeColor
        : props.color
    }};
  }
`;

const Button = styled(R95Button)`
  z-index: 5;
  position: absolute;
  right: 1rem;
  width: 80px;
`;

const COLORS = ["red", "blue", "green", "purple", "gold", "black"];

export default function Paint() {
  const canvasRef = React.useRef(null);
  const randomColor = getRandomColor();
  const [activeColor, setActiveColor] = React.useState("red")
  const [clearCanvas] = usePaint(canvasRef, activeColor);

  return (
    <StyledModal title="Paint.exe" icon="brush">
      <Button onClick={clearCanvas}>Reset</Button>
      <canvas ref={canvasRef} width="500" height="500" />
      <div>
        <ColorPicker>
          {COLORS.map(color => (
            <Color
              key={color}
              color={color}
              activeColor={activeColor}
              onClick={() => {
                setActiveColor(color)
              }}
            />
          ))}
          <Color
            color="random"
            activeColor={activeColor}
            onClick={() => {
              setActiveColor(randomColor)
            }}
          />
        </ColorPicker>
      </div>
    </StyledModal>
  )
}