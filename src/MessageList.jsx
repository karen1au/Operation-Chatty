import React, {Component} from 'react';
import Message from './Message.jsx'
class MessageList extends Component {
    render(){
        const allMessage = this.props.messages.map((item) => {
            return <Message messages={item} key={item.id? item.id : item.content}/>
        })

        return(
            <main className="messages">
                {allMessage}
            </main>
        )
    }
}

export default MessageList;