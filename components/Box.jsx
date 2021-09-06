import styled from 'styled-components';
import {
  background,
  color,
  flexbox,
  space,
  layout,
  position,
  grid,
  system,
  typography,
} from 'styled-system';

const Box = styled.div(
  background,
  color,
  flexbox,
  space,
  layout,
  position,
  grid,
  typography,
  system({
    gridArea: true,
    gridAutoFlow: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRowEnd: true,
    gridRowStart: true,
    gridTemplateAreas: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    textOverflow: true,
  })
);

export default Box;
