import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const Text = ({type = "text", name, styles = []}) => {
  return (
    <input type={type}
      name={name}
      className={css(style.input, ...styles)} />
  );
};

const style = StyleSheet.create({
  input: {
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
  },
});

export default Text;
