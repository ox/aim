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
      <img src="public/img/aim-header.png" className={css(styles.header)}/>
      <div className={css(styles.headerLogoContainer)}></div>

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
  header: {
    width: '100%',
  },
  headerLogoContainer: {
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
