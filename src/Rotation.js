import { css } from "styled-components";

export const controlRotation = css`
  height: 85vh;
  @media only screen and (min-width: 420px) {
    height: 100vh;
  }
`;

export const controllMenuBar = css`
  display: flex;
  @media only screen and (min-width: 420px) {
    display: none !important;
  }
`;
