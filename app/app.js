import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BuddyList from './components/buddy-list';
import SignOn from './components/sign-on';

class App extends Component {
  render() {
    return <div>
      <SignOn />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
