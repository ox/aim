import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const Text = ({type = "text", name, styles = []}) => {
  return (
    <input type={type}
      name={name}
      className={css(styles.input, ...styles)} />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 2,
    borderTop: '1px solid gray',
    borderLeft: '1px solid gray',
    borderRight: '1px solid #dfdfdf',
    borderBottom: '1px solid #dfdfdf',
    boxShadow: '1px 0 #fff, 0 1px #fff, 1px 1px #fff',
    marginRight: '1px',
  },
});

export default Text;
