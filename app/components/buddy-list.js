import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import {Tabs, Tab} from './input/tabs';
import {List, Item} from './input/collapsable-list';

class BuddyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buddies: [
        {
          id: 1,
          username: 'JRuby82',
          status: 'online',
        },
        {
          id: 2,
          username: 'cole',
          status: 'offline',
        },
        {
          id: 3,
          username: 'abby',
          status: 'idle',
        },
      ],
    };
  }

  render() {
    const buddiesOnline = this.state.buddies.reduce((memo, x) => {
      return (x.status === 'online' || x.status === 'idle') ? memo + 1 : memo;
    }, 0);
    const buddiesOffline = this.state.buddies.length - buddiesOnline;

    return <div>
      <div className={css(styles.headerBanner)}></div>
      <div className={css(styles.headerLogo)}></div>

      <Tabs>
        <Tab title="Online" >
          <List>
            <Item
              title={`Buddies (${buddiesOnline}/${this.state.buddies.length})`}
              visible={true}
              highlight={true}
            >
              {this.state.buddies.map((buddy) => {
                return buddy.status !== 'offline' ? <Item
                  key={buddy.id}
                  title={buddy.username}
                  styles={[buddy.status === 'idle' ? styles.idle : styles.active]}
                /> : null;
              })}
            </Item>
            <Item title="Family (0/0)" />
            <Item title="Co-Workers (0/0)" />
            <Item title={`Offline (${buddiesOffline}/${this.state.buddies.length})`}>
              {this.state.buddies.map((buddy) => {
                return buddy.status === 'offline' ? <Item
                  key={buddy.id}
                  title={buddy.username}
                  styles={[buddy.status === 'offline' ? styles.idle : styles.active]}
                /> : null;
              })}
            </Item>
          </List>
        </Tab>
      </Tabs>
    </div>;
  }
}

const styles = StyleSheet.create({
  headerBanner: {
    width: '100%',
    height: 20,
    backgroundImage: 'url(public/img/aim-header.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  headerLogo: {
    width: 120,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 4,
    backgroundImage: 'url(public/img/aim-header-logo.png)',
    backgroundSize: 'contain',
  },
  active: {
    color: '#000',
  },
  idle: {
    color: '#929292',
  },
});

module.exports = BuddyList;
