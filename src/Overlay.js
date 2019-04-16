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

const Stepper = styled.span`
  & :first-child {
    border-left: 1px solid;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-right: 1px solid;
    border-color: #000;
  }
  & :last-child {
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-left: 0;
    border-color: #000;
  }
`;

const Button = styled.button`
  ${overlayThemes};
  background-color: rgba(0, 0, 0, 0);
  font-weight: 700;
  border-radius: 0.25em;
  height: 1.25rem;
  width: 1.25rem;
  &:hover {
    transition: background-color 0.5s ease;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    outline: none;
  }
`;

const Sizes = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Photo = ({ showOverlay }) => {
  return (
    <Overlay style={{ display: showOverlay ? "block" : "none" }}>
      <OverlayText>Escolha quantidade de copias</OverlayText>
      <Sizes>
        <li>
          10X15 nenhuma cópia
          <Stepper>
            <Button>&#65291;</Button>
            <Button>&#65293;</Button>
          </Stepper>
        </li>
        <li>13x18</li>
        <li>15x21</li>
        <li>20x25</li>
      </Sizes>
    </Overlay>
  );
};
export default Photo;
