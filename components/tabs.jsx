import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import Well from './well';

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleTabIdx:0,
    };

    this.setVisibleTabIdx = this.setVisibleTabIdx.bind(this);
  }

  setVisibleTabIdx(idx) {
    this.setState({visibleTabIdx: idx});
  }

  render() {
    const tabs = React.Children.map(this.props.children, (x, i) => {
      return React.cloneElement(x, {
        visible: this.state.visibleTabIdx === i,
        onClick: this.setVisibleTabIdx.bind(null, i),
      });
    });

    return <div>{tabs}</div>;
  }
}

export const Tab = ({title, children, visible = false}) => {
  return (
    <div>
      <a className={css(styles.tab)}>{title}</a>
      <div className={css(styles.tabFrame)}>
        <Well styles={[styles.tabContent]}>
          {visible && (<div>
              {children}
            </div>)}
        </Well>
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
    borderTopLeftRadius: 3,
    cursor: 'pointer',
    '-webkit-user-select': 'none',
  },
  tabFrame: {
    borderLeft: '1px solid #fff',
    borderTop: '1px solid #fff',
    borderRight: '1px solid #000',
    borderBottom: '1px solid #000',
    marginTop: -1,
    marginRight: 6,
  },
  tabContent: {
    minHeight: 150,
  },
});
