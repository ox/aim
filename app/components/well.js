import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

const Well = (props) => {
  const {children} = props;
  return (
    <div className={css(styles.well, ...(props.styles || []))}>{children}</div>
  );
}

const styles = StyleSheet.create({
  well: {
    padding: 2,
    paddingLeft: 3,
    paddingRight: 3,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 3,
    marginRight: 3,
    borderTop: '1px solid black',
    borderLeft: '1px solid black',
    borderRight: '1px solid #D2CFC9',
    borderBottom: '1px solid #D2CFC9',
    boxShadow: '-1px 0 #929292, 0 -1px #929292, 1px 0 #fff, 0 1px #fff, 1px 1px #fff',
    backgroundColor: '#fff',
    outline: '0px solid transparent',
    ':active': {
      outline: '0px solid transparent',
    },
  },
});

export default Well;
