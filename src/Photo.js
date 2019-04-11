import React, { useState } from "react";
import styled from "styled-components";
import Overlay from "./Overlay";
import { contentThemes } from "./Themes";

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 0;
`;

const Container = styled.div`
  ${contentThemes}
  scroll-snap-align: start;
  position: relative;
  display: flex;
  max-height: 85vh;
  @media only screen and (max-width: 420px) {
    height: 85vh;
  }
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
        <Overlay showOverlay={showOverlay} />
      </Aligner>
    </Container>
  );
};
export default Photo;
