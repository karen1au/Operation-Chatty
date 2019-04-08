import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MessageList />
        <Chatbar />
      </div>
    );
  }
}
export default App;
