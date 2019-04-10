import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import theme from "styled-theming";
import add from "./assets/002-add.svg";
import album from "./assets/003-photo-album.svg";
import save from "./assets/006-sd-card.svg";
import selection from "./assets/008-focus.svg";
import Photo from "./Photo";

const contentThemes = theme("mode", {
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

const iconThemes = theme("mode", {
  light: css``,
  dark: css`
    filter: invert(1);
  `,
  batterySaver: css`
    filter: invert(1);
  `
});

const Content = styled.div`
  ${contentThemes};
  height: 90vh;
`;

const Gallery = styled.div`
  overflow-y: scroll;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  scroll-snap-type: y proximity;
  justify-content: center;
`;

const Icon = styled.img`
  ${iconThemes};
  width: 20%;
  height: 20%;
  @media only screen and (max-width: 400px) {
    width: 50%;
    height: 50%;
  }
`;
const IconText = styled.h2`
  font-size: 10px;
  margin: 0;
`;

const Menu = styled.div`
  ${contentThemes};
  width: 100vw;
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  height: 10vh;
`;

const MenuButton = styled.button`
  ${contentThemes}
  border:0;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: "light" }}>
        <React.Fragment>
          <Content>
            <Gallery>
              <Photo
                src="https://pbs.twimg.com/media/DVp0LsSVQAEPjkh.jpg:small"
                name="photo01"
              />
              <Photo
                src="https://st03.kakprosto.ru/tumb/680/images/article/2012/3/22/1_52550e1d7368652550e1d736ce.jpg"
                name="photo01"
              />
             </Gallery>
          </Content>
          <Menu>
            <MenuButton>
              <Icon src={album} alt="albuns" />
              <IconText>Albuns</IconText>
            </MenuButton>
            <MenuButton>
              <Icon src={add} alt="select" />
              <IconText>Selecionar</IconText>
            </MenuButton>
            <MenuButton>
              <Icon src={selection} alt="selection" />
              <IconText>Seleção</IconText>
            </MenuButton>
            <MenuButton>
              <Icon src={save} alt="save" />
              <IconText>Salvar</IconText>
            </MenuButton>
          </Menu>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
