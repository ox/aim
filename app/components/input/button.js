import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const Button = ({type}) => {
  <button className={css(styles.button, styles.helpButton)}/>
};

const styles = StyleSheet.create({
  button: {
    float: 'right',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    border: '#ccc',
    ':active': {
      borderTop: '1px solid gray',
      borderLeft: '1px solid gray',
      borderRight: '1px solid #dfdfdf',
      borderBottom: '1px solid #dfdfdf',
      boxShadow: '1px 0 #fff, 0 1px #fff, 1px 1px #fff',
      outline: '0px solid transparent',
    },
    ':focus': {
      outline: '0px solid transparent',
    },
  },
});

export default Button;
