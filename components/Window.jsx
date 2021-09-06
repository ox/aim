import React from "react";
import styled from "styled-components";
import { space, layout, color } from "styled-system";

import {ipcRenderer} from "electron";

import Box from "./Box";
import Image from "./Image";
import Button from "./Button";

import closeButton from "../public/img/close.png";
import minimizeButton from "../public/img/minimize.png";
import maximizeButton from "../public/img/maximize.png";

const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  height: '24px',
  width: '100%',
  paddingLeft: '6px',
  paddingRight: '2px',
  paddingTop: '2px',
  marginBottom: '2px',

  color: 'white',
  background: 'linear-gradient(to right, #020D7E, #A2CFF8)',
});

const Title = styled(Box)({
  flex: 1,
  display: 'inline-flex',
  lineHeight: '24px',
  verticalAlign: 'top',
  fontWeight: 'bold',
  '-webkit-app-region': 'drag',
  '-webkit-user-select': 'none',
});

const WindowControlButton = styled(Button)({
  width: '16px',
  height: '16px',
})

const Window = ({ title, children }) => {
  const closeWindow = () => {
    ipcRenderer.send('close-window');
  }

  return (
    <Box>
      <Header>
        <Image height={20} p={2} pl={0} src="public/img/aim-boy.png" />
        <Title>{title}</Title>
        <WindowControlButton backgroundImage={`url(${minimizeButton})`} />
        <WindowControlButton backgroundImage={`url(${maximizeButton})`} />
        <WindowControlButton onClick={closeWindow} backgroundImage={`url(${closeButton})`} ml={1} />
      </Header>
      <main>
        {children}
      </main>
    </Box>
  );
}

Window.defaultProps = {
  title: "thunderfunk88",
};

module.exports = Window;
