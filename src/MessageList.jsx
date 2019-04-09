import React, {Component} from 'react';
import Message from './Message.jsx'
class MessageList extends Component {
    render(){
        const allMessage = this.props.messages.map((item) => {
        return <Message messages={item} key={item.id}/>})

        return(
            <article className="messagesList">
                {allMessage}
            </article>
        )
    }
}

export default MessageList;