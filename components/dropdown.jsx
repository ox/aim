import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';
import Button from './button';

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({open: !this.state.open});
  }

  render() {
    const {title, children} = this.props;
    const {open} = this.state;

    return (
      <div>
        <Button type="flat" onMouseDown={this.toggleOpen}>{this.props.title}</Button>
        { open &&
          <div>{this.props.children}</div> }
      </div>
    );
  }
}

export const DropDownItem = ({title}) => {
  return (
    <div>{title}</div>
  );
}

const styles = StyleSheet.create({
  
});
