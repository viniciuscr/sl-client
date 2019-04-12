import React from "react";
import styled from "styled-components";
import { overlayThemes } from "./Themes";
import { controlRotation } from "./Rotation";

const Overlay = styled.div`
  ${overlayThemes};
  ${controlRotation}
  display: none;
  color: #000;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
`;

const OverlayText = styled.h4`
  ${overlayThemes};
  font-size: 25px;
  text-align: center;
  line-height: 6vh;
  text-align: center;
`;

const Button = styled.button`
  ${overlayThemes};
  background-color: rgba(0, 0, 0, 0);
  font-size: 5vh;
  width: 100%;
  border: 0;
  &:hover {
    transition: background-color 0.5s ease;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    outline: none;
  }
`;

const NumPad = styled.div`
  column-count: 5;
  height: 60vh;
  column-gap: 0;
  button {
    height: 20%;
  }
  @media only screen and (max-width: 420px) {
    column-count: 3;
  }
`;

const Aligner = styled.div`
  align-self: center;
`;

const Photo = ({ showOverlay }) => {
  return (
    <Overlay style={{ display: showOverlay ? "flex" : "none" }}>
      <Aligner>
        <OverlayText>Escolha quantidade de copias</OverlayText>
        <NumPad>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>10</Button>
          <Button>11</Button>
          <Button>12</Button>
        </NumPad>
        <Button>Cancelar</Button>
      </Aligner>
    </Overlay>
  );
};
export default Photo;
