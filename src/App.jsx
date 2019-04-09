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
  constructor (props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }
    this.socket = new WebSocket("ws://localhost:3001")

  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket.onopen = () => {
      console.log("connected to the server");
    }
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data)
      this.setState({messages: [...this.state.messages, message]})
    }
  }
  
  addMessage(content){
    const newMsg = {
      username: this.state.currentUser.name,
      content: content
  }
      this.socket.send(JSON.stringify(newMsg))
  }

  addUser(user){
    this.setState({currentUser: {name : user}})
  }
    

  render() {
    console.log(this.state.messages);
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
