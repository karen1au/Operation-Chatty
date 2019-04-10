import React, {Component} from 'react';

class Message extends Component {
    render(){
            const regex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/ig;
            let content = this.props.messages.content
            let finalContent;
            if (regex.test(content)){
                finalContent =
                <span className="message-content">{content.replace(regex,"")}<img src={content.match(regex)}/></span>
                
            } else {
                finalContent =
                <span className="message-content">{content}</span>
            }
        return(
            this.props.messages.username?
                <div className="message">
                    <span className="message-username">{this.props.messages.username}</span>
                    {/* <span className="message-content">{this.props.messages.content.replace(regex,'<img src="$&"/>')}</span> */}
                    {/* <img src={this.props.messages.content.match(regex)}/> */}
                    {finalContent}
                </div> :
                <div className="message system">
                    {this.props.messages.content}
                </div>
        )
    }
}

export default Message;