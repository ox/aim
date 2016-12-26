import React, {Component} from 'react';

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
      <h2>Buddys</h2>
      {this.state.buddies.map((buddy) => {
        return <div><span>{buddy.username}</span><br/></div>
      })}
    </div>;
  }
}

module.exports = BuddyList;
