import React, { useState } from "react";
import styled from "styled-components";
import Overlay from "./Overlay";
import { contentThemes } from "./Themes";
import { controlRotation } from "./Rotation";

const Img = styled.div`
  ${contentThemes}
  ${controlRotation}
  height: 85vh;
  width: 100vw;
  z-index: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  scroll-snap-align: start;
  display: flex;
`;

const Badge = styled.li`
  span {
    padding: 0.2em 0.6em 0.3em;
    font-size: 75%;
    color: #fff;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;
    color: black;
    margin: 0.1rem;
  }
`;
const BadgeWrapper = styled.ol`
  list-style-type: none;
  line-height: 1.5rem;
  align-self: flex-end;
  margin: 0;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const PlusIcon = styled.div`
  border-radius: 50%;
  background: #db4437;
  cursor: pointer;
  box-shadow: 0px 0px 2px #db4437;
  position: relative;
  width: 50px;
  height: 50px;
  bottom: 10vh;
  right: 85vh;
`;

const Photo = ({ src, name }) => {
  let [showOverlay, setShowOverlay] = useState(false);

  return (
    <div>
      <Img
        onClick={() => setShowOverlay(!showOverlay)}
        style={{ backgroundImage: `url(${src})` }}
      >
        <BadgeWrapper>
          <Badge>
            <span style={{ backgroundColor: "var(--pink)" }}>
              2 copias <u>10x15</u>
            </span>
          </Badge>
          <Badge>
            <span style={{ backgroundColor: "var(--green)" }}>
              1 cópia <u>13x18</u>
            </span>
          </Badge>
          <Badge>
            <span style={{ backgroundColor: "var(--purple)" }}>
              1 cópia <u>15x21</u>
            </span>
          </Badge>
          <Badge>
            <span style={{ backgroundColor: "var(--blue)" }}>
              1 cópia <u>20x25</u>
            </span>
          </Badge>
        </BadgeWrapper>
        <Overlay showOverlay={showOverlay} />
      </Img>
      <PlusIcon />
    </div>
  );
};
export default Photo;
