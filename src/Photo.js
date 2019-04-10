import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;
const Name = styled.h3`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  bottom: 0;
`;

const Container = styled.div`
  justify-content: center;
  line-height: 0;
`;

const Photo = ({ src, name }) => {
  return (
    <Container>
      <Img src={src} alt={name} />
    </Container>
  );
};
export default Photo;
