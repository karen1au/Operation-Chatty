import React, {Component} from 'react';
import Message from './Message.jsx'
class MessageList extends Component {
    render(){
        return(
            <article className="messagesList">
                <Message />
            </article>
        )
    }
}

export default MessageList;