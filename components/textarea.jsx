import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

import Well from './well';

const Textarea = (props) => {
  return (
    <Well styles={[styles.textareaWell, ...(props.styles || [])]}>
      <textarea className={css(styles.textarea)}></textarea>
    </Well>
  );
}

const styles = StyleSheet.create({
  textareaWell: {
    position: 'relative',
    height: 55,
    overflow: 'scroll',
  },
  textarea: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    resize: 'none',
    outline: 'none',
    border: 0,
  },
});

export default Textarea;
