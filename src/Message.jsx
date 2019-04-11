import React, {Component} from 'react';

class Message extends Component {
    render(){
        const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/ig;
        let content = this.props.messages.content
        let finalContent;
        if (regex.test(content)){
            finalContent =
            <span className="message-content">{content.replace(regex,"")}<img src={content.match(regex)}/></span>;    
        } else {
            finalContent =
            <span className="message-content">{content}</span>
        }
        console.log('color is ',this.props)
        return(
            this.props.messages.username ?
                <div className="message">
                    <span className="message-username" style={{color: this.props.messages.color}}>{this.props.messages.username}</span>
                    {finalContent}
                </div> :
                <div className="message system">
                    {this.props.messages.content}
                </div>
        )
    }
}

export default Message;