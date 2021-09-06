import styled from "styled-components";

import Box from "./Box";

const Well = styled(Box)({
  padding: 2,
  paddingLeft: 3,
  paddingRight: 3,
  marginTop: 4,
  marginBottom: 4,
  marginLeft: 3,
  marginRight: 3,
  borderTop: '1px solid black',
  borderLeft: '1px solid black',
  borderRight: '1px solid beige',
  borderBottom: '1px solid beige',
  boxShadow: '-1px 0 #929292, 0 -1px grayMedium, 1px 0 #fff, 0 1px #fff, 1px 1px #fff',
  backgroundColor: '#fff',
  outline: '0px solid transparent',
  ':active': {
    outline: '0px solid transparent',
  },
});

export default Well;
