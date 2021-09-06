import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

export const Group = ({children}) => {
  return (
    <div className={css(styles.group)}>
      <div className={css(styles.groupContent)}>
        {children}
      </div>
    </div>
  );
};

export const GroupDivider = (props) => {
  return (
    <div className={css(styles.groupDivider, ...(props.styles || []))}>{props.children}</div>
  );
};

const styles = StyleSheet.create({
  group: {
    position: 'relative',
    marginTop: 8,
    marginLeft: 3,
    marginRight: 3,
    marginBottom: -2,
    border: '1px solid #fff',
    borderBottom: '1px solid #808080',
    borderRight: '1px solid #808080',
    boxShadow: '-1px 0 #808080, 0 -1px #808080, 1px 0 #fff, 0 1px #fff',
    zIndex: 100,
  },
  groupContent: {
    textAlign: 'center',
  },
  groupDivider: {
    display: 'inline-block',
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 2,
    borderTop: '1px solid #DCD9D3',
    borderRight: '1px solid #808080',
    boxShadow: '1px 0 #fff',
    ':last-child': {
      border: 0,
      borderTop: '3px solid #DCD9D3',
      boxShadow: 'none',
    },
  },
});
