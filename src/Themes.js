import theme from "styled-theming";
import { css } from "styled-components";

export const contentThemes = theme("mode", {
  light: css`
    background-color: #fff;
    color: #000;
  `,
  dark: css`
    background-color: #2d2a2e;
    color: #fcfcfa;
  `,
  batterySaver: css`
    background-color: #000;
    color: #ccc;
  `
});

export const iconThemes = theme("mode", {
  light: css``,
  dark: css`
    filter: invert(1);
  `,
  batterySaver: css`
    filter: invert(1);
  `
});

export const overlayThemes = theme("mode", {
  light: css`
    background-color: rgba(255, 255, 255, 0.96);
    color: #000;
  `,
  dark: css`
    background-color: rgba(45, 42, 46, 0.96);
    color: #fcfcfa;
  `,
  batterySaver: css`
    background-color: rgba(0, 0, 0, 0.96);
    color: #ccc;
  `
});
