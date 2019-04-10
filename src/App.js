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
`;

const Gallery = styled.div`
  column-count: 2;
  column-gap: 0;
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
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                name="photo01"
              />
              <Photo
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
                name="photo01"
              />
              <Photo
                src="https://i.pinimg.com/736x/8a/ba/db/8abadb6f03f9ed190aa03cb63b7680e3--pretty-eyes-beautiful-eyes.jpg?b=t"
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
