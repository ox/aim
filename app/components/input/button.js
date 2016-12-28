import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const Button = (props) => {
  const {type, styles = [], children} = props;
  let finalStyles = styles;

  switch (type) {
    case 'flat':
      finalStyles.push(style.flat);
      break;
  }

  return <button className={css(style.button, ...finalStyles)} {...props}>{children}</button>;
};

const style = StyleSheet.create({
  button: {
    borderRadius: '0',
    borderTop: '1px solid #fff',
    borderLeft: '1px solid #fff',
    borderRight: '1px solid gray',
    borderBottom: '1px solid gray',
    boxShadow: 'inset 1px 1px #dfdfdf, 1px 0 #000, 0 1px #000, 1px 1px #000',

    backgroundColor: '#DCD9D3',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    outline: '0px solid transparent',

    ':active': {
      borderTop: '1px solid #000',
      borderLeft: '1px solid #000',
      borderRight: '1px solid #dfdfdf',
      borderBottom: '1px solid #dfdfdf',
      boxShadow: 'inset 1px 1px grey, 1px 0 #fff, 0 1px #fff, 1px 1px #fff',
      outline: '0px solid transparent',
    },

    ':focus': {
      outline: '0px solid transparent',
    },
  },
  flat: {
    border: 0,
    boxShadow: 0,
  },
});

export default Button;
