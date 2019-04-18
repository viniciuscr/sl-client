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
  top: 0;
  z-index: 2;
  width: 100vw;
`;

const OverlayText = styled.h4`
  ${overlayThemes};
`;

const Button = styled.button`
  ${overlayThemes};
  height: 2rem;
  width: 2rem;
  &:hover {
    transition: background-color 0.5s ease;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    outline: none;
  }
`;

const Row = styled.main`
  ${overlayThemes};
  padding: 10px 0;
  margin: 0.5rem;
  position: relative;
  border-bottom: 2px solid #dadada;

  & > ul {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  & > ul li {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    list-style: none;
    box-sizing: border-box;
  }

  .title li {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Stepper = styled.span`
  margin: 0.5rem;
  & :first-child {
    border: 2px solid;
    border-radius: 0.55rem 0 0 0.55rem;
    border-color: #adadad;
  }
  & :last-child {
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-top: 2px solid;
    border-left: 0;
    border-radius: 0 0.55rem 0.55rem 0;
    border-color: #adadad;
  }
`;

const Photo = ({ showOverlay }) => {
  return (
    <Overlay style={{ display: showOverlay ? "block" : "none" }}>
      <OverlayText>Escolha quantidade de copias</OverlayText>
      <Row>
        <ul style={{ borderLeft: "3px solid var(--gray)" }} class="title">
          <li>Tamanho</li>
          <li>Quantidade</li>
          <li />
        </ul>
      </Row>
      <Row>
        <ul style={{ borderLeft: "3px solid var(--green)" }}>
          <li>10x15</li>
          <li>0</li>
          <li>
            <Stepper>
              <Button>&#65291;</Button>
              <Button>&#65293;</Button>
            </Stepper>
          </li>
        </ul>
      </Row>
      <Row>
        <ul style={{ borderLeft: "3px solid var(--purple)" }}>
          <li>13x18</li>
          <li>0</li>
          <li>
            <Stepper>
              <Button>&#65291;</Button>
              <Button>&#65293;</Button>
            </Stepper>
          </li>
        </ul>
      </Row>
      <Row>
        <ul style={{ borderLeft: "3px solid var(--yellow)" }}>
          <li>15x21</li>
          <li>0</li>
          <li>
            <Stepper>
              <Button>&#65291;</Button>
              <Button>&#65293;</Button>
            </Stepper>
          </li>
        </ul>
      </Row>
      <Row>
        <ul style={{ borderLeft: "3px solid var(--pink)" }}>
          <li>30x40</li>
          <li>0</li>
          <li>
            <Stepper>
              <Button>&#65291;</Button>
              <Button>&#65293;</Button>
            </Stepper>
          </li>
        </ul>
      </Row>
      <Button>Pronto</Button>
    </Overlay>
  );
};
export default Photo;
