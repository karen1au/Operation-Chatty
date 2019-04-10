import React, {Component} from 'react';
import Chatbar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class Navbar extends Component {
  render() {
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Operation Chatty</a>
    </nav>
    )
  }
}


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
    }

  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket("ws://localhost:3001")
    this.socket.onopen = () => console.log("connected to the server");
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data)
      switch(message.type) {
        case "incomingMessage":
          // handle incoming message
          break;
        case "incomingNotification":
          // handle incoming notification
          break;
        default:
          // show an error in the console if the message type is unknown
          throw new Error("Unknown event type " + data.type);
      }
      this.setState({messages: [...this.state.messages, message]})
    }
  }
  
  addMessage(content){
    const newMsg = {
      type: "postMessage",
      username: this.state.currentUser.name,
      content: content
    }
      console.log('msg',newMsg)
      this.socket.send(JSON.stringify(newMsg))
  }

  addUser(user){
    const newNoti = {
      type: "postNotification",
      content: this.state.currentUser.name + ' has changed their name to ' + user
    }
    this.socket.send(JSON.stringify(newNoti))
    console.log('noti',newNoti);
    this.setState({currentUser: {name : user}})
  }
    

  render() {
    console.log('check',this.state.messages);
    return (
      <div>
        <Navbar />
        <MessageList messages={this.state.messages}/>
        <Chatbar name={this.state.currentUser.name} setMsg={this.addMessage.bind(this)}
                 setUser={this.addUser.bind(this)}/>
      </div>
    );
  }
}
export default App;
