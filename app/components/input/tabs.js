import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    const tabs = React.Children.map(this.props.children, (x) => {
      return React.cloneElement(x, {visible: true});
    });

    return <div>{tabs}</div>;
  }
}

export const Tab = ({title, children, visible = false}) => {
  return (
    <div>
      <a className={css(styles.tab)}>{title}</a>
      <div className={css(styles.tabFrame)}>
        <div className={css(styles.tabContent)}>
          {visible ? (<div>
              {children}
            </div>)
            : null}
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  tab: {
    display: 'inline-block',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 7,
    borderLeft: '1px solid #fff',
    borderRight: '1px solid #929292',
    borderTop: '1px solid #fff',
    borderBottom: '1px solid #DCD9D3',
  },
  tabFrame: {
    padding: 3,
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    borderRight: '1px solid #000',
    borderBottom: '1px solid #000',
    marginTop: -1,
    marginRight: 6,
  },
  tabContent: {
    padding: 2,
    backgroundColor: '#fff',
    borderTop: '1px solid #929292',
    borderLeft: '1px solid #929292',
    borderRight: '1px solid #DCD9D3',
    borderBottom: '1px solid #DCD9D3',
    boxShadow: 'inset 1px 1px #000, 1px 0 #fff, 0 1px #fff, 1px 1px #fff',
    minHeight: 150,
  },
});
