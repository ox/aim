import React from 'react';
import styled from "styled-components";
import { layout, space, border, shadow, system } from "styled-system";

const T = styled.input(
  space,
  layout,
  border,
  shadow,
  system({
    outline: true,
  }),
  {
    padding: 2,
    borderTop: '2px solid gray',
    borderLeft: '2px solid gray',
    borderRight: '2px solid #dfdfdf',
    borderBottom: '2px solid #dfdfdf',
    boxShadow: '1px 0 #fff, 0 1px #fff, 1px 1px #fff',
    marginRight: '1px',
    outline: '0px solid transparent',
    ':active': {
      outline: '0px solid transparent',
    },
  }
)

const Text = (props) => <T type="text" {...props} />;

export default Text;
