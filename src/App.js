import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import add from "./assets/002-add.svg";
import album from "./assets/003-photo-album.svg";
import save from "./assets/006-sd-card.svg";
import selection from "./assets/008-focus.svg";
import settings from "./assets/001-setup.svg";
import Photo from "./Photo";
import { contentThemes, iconThemes } from "./Themes";
import { controlRotation, controllMenuBar } from "./Rotation";

const Header = styled.div`
  ${contentThemes};
  ${controllMenuBar};
  z-index: 1;
  top: 0;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  img {
    height: 3vh;
    padding: 1vh;
  }
`;

const Title = styled.h1`
  font-size: 14px;
  margin: 0 0 0 10vw;
  align-self: center;
  text-align: center;
  width: 90vw;
  text-transform: uppercase;
`;

const Content = styled.div`
  ${contentThemes};
  ${controlRotation};
`;

const Gallery = styled.div`
  ${controlRotation};
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  scroll-snap-type: y proximity;
  justify-content: center;
`;

const Icon = styled.img`
  ${iconThemes};
  width: 20%;
  height: 20%;
  @media only screen and (max-width: 420px) {
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
  ${controllMenuBar};
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

const Settings = styled.img`
  ${iconThemes};
`;

class App extends Component {
  constructor() {
    super();
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName("body")[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height =
        w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width: width, height: height });
  }
  componentWillMount() {
    this.updateDimensions();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <ThemeProvider theme={{ mode: "batterySaver" }}>
        <React.Fragment>
          <Header>
            <Title>
              Gatinhos
              <span>
                {this.state.width} x {this.state.height}
              </span>
            </Title>
            <Settings src={settings} alt="settings" />
          </Header>
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
