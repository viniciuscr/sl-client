import React from "react";
import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Name = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  margin: 12px 0 12px 0;
`;

const Container = styled.div`
  scroll-snap-align: start;
  height: 90vh;
  width: 95vw;
`;

const Photo = ({ src, name }) => {
  return (
    <Container>
      <Img src={src} alt={name} />
      <Name>{name}</Name>
    </Container>
  );
};
export default Photo;
