import React from "react";
import styled from 'styled-components';
import { background, border, color, display, layout, position, space, system } from 'styled-system';

export const Image = styled.img(
  background,
  border,
  color,
  display,
  layout,
  position,
  space,
  system({ cursor: true })
);
Image.defaultProps = {
  border: 0,
};

export default Image;
