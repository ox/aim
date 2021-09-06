import React from "react";
import styled from "styled-components";
import { background, border, color, shadow, space, system, variant } from "styled-system";

const Button = styled.button(
  background,
  border,
  color,
  space,
  shadow,
  system({
    outline: true,
  }),
  {
    borderRadius: 0,
    borderTop: '1px solid #fff',
    borderLeft: '1px solid #fff',
    borderRight: '1px solid gray',
    borderBottom: '1px solid gray',
    boxShadow: 'inset 1px 1px grayLight, 1px 0 #000, 0 1px #000, 1px 1px #000',

    backgroundColor: 'grayLight',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    outline: '0px solid transparent',

    ':active': {
      borderTop: '1px solid #000',
      borderLeft: '1px solid #000',
      borderRight: '1px solid grayLight',
      borderBottom: '1px solid grayLight',
      boxShadow: 'inset 1px 1px grey, 1px 0 #fff, 0 1px #fff, 1px 1px #fff',
      outline: '0px solid transparent',
    },

    ':focus': {
      outline: '0px solid transparent',
    },
  },
  variant({
    variants: {
      flat: {
        border: 0,
        boxShadow: 0,
      }
    }
  })
);

export default Button;
