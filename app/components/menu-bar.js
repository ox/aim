import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

class MenuBar extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

const styles = StyleSheet.create({

});

export default MenuBar;
