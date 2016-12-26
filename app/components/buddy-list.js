import React, {Component} from 'react';
import {css, StyleSheet} from 'aphrodite';
import {Tabs, Tab} from './input/tabs';

class BuddyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buddies: [
        {
          id: 1,
          username: 'cole',
          status: 'online',
        },
        {
          id: 2,
          username: 'soph',
          status: 'offline',
        },
      ],
    };

    this.render = this.render.bind(this);
  }

  render() {
    return <div>
      <div className={css(styles.headerBanner)}></div>
      <div className={css(styles.headerLogo)}></div>

      <Tabs>
        <Tab title="Online">
          {this.state.buddies.map((buddy) => {
            return <div key={buddy.id}><span>{buddy.username}</span><br/></div>
          })}
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
  }
});

module.exports = BuddyList;
