import React, {Component} from 'react';

class Message extends Component {
    render(){
        return(
            this.props.messages.username?
                <div className="message">
                    <span className="message-username">{this.props.messages.username}</span>
                    <span className="message-content">{this.props.messages.content}</span>
                </div> :
                <div className="message system">
                    {!this.props.messages.id ? this.props.messages.content : ""}
                </div>
        )
    }
}

export default Message;