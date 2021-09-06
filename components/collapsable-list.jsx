import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite/no-important';

export class List extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
    };

    this.toggleVisible = this.toggleVisible.bind(this);
    this.render = this.render.bind(this);
  }

  toggleVisible() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const {title, highlight, children} = this.props;
    const {visible} = this.state;

    return <div className={css(styles.container)}>
      <div
        className={css(styles.item, this.props.styles)}
        onClick={this.toggleVisible}
      >
        <span className={css(styles.title, highlight && styles.highlight)}>
          {title}
        </span>
      </div>
      <div className={css(styles.subList)}>
        {visible ? children : null}
      </div>
    </div>;
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  item: {
    position: 'relative',
    cursor: 'pointer',
    fontSize: 12,
    '-webkit-user-select': 'none',
    marginLeft: 10,
  },
  title: {
    '-webkit-user-select': 'none',
    fontSize: 12,
  },
  subList: {
    paddingLeft: 15,
  },
  highlight: {
    backgroundColor: '#FEF934',
  },
});
