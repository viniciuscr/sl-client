import React, { useState } from "react";
import styled from "styled-components";
import Overlay from "./Overlay";
import { contentThemes } from "./Themes";
import selected from "./assets/004-multi-select.svg";
import { controlRotation } from "./Rotation";
const Img = styled.img`
  max-width: 100%;
  max-height: 100vh;
  z-index: 0;
`;

const Selected = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: 10vw;
`;

const Container = styled.div`
  ${contentThemes}
  scroll-snap-align: start;
  position: relative;
  display: flex;
  ${controlRotation};
`;

const Aligner = styled.div`
  align-self: center;
`;

const Photo = ({ src, name }) => {
  let [showOverlay, setShowOverlay] = useState(false);

  return (
    <Container>
      <Aligner>
        <Img
          onClick={() => setShowOverlay(!showOverlay)}
          src={src}
          alt={name}
        />
        <Selected src={selected} />
        <Overlay showOverlay={showOverlay} />
      </Aligner>
    </Container>
  );
};
export default Photo;
