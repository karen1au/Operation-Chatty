import React, {Component} from 'react';

class Chatbar extends Component {
    submitComment(e){
        if(e.key === 'Enter' && !e.shiftKey && e.target.value.length > 0){
            this.props.setMsg(e.target.value)
            e.target.value = "";
        }
    }
    submitUser(e){
        if(e.key === 'Enter' && !e.shiftKey && e.target.value.length > 0 && e.target.value !== this.props.name){
            this.props.setUser(e.target.value)
        }
    }
    render(){

        return(
            <footer className="chatbar">
                <input className="chatbar-username" placeholder="Your Name (Optional)" 
                    defaultValue={`Agent ${this.props.name}`}
                    onKeyPress={this.submitUser.bind(this)}/>
                <input className="chatbar-message" 
                    placeholder="Type a message and hit ENTER" 
                    onKeyPress={this.submitComment.bind(this)} />
            </footer>
        )
    }
}

export default Chatbar;