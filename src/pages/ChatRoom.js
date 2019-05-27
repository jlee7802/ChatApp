import React from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { OuterDiv, MessageList, MessageDiv, InputDiv } from './chatRoom/styles.js';

class ChatRoom extends React.Component {
	constructor(props){
		super(props);
		this.state = { data: [], stompClient: null, inputValue: '' };

		this.handleChange = this.handleChange.bind(this);
		this.connect();
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	// Create websocket connection
	connect(){
		var socket = new SockJS('http://localhost:8010/gs-guide-websocket');
    	this.state.stompClient = new Stomp.over(socket);
    	this.state.stompClient.connect({}, (frame) => {
        	this.state.stompClient.subscribe('/topic/greetings', (greeting) => {
        		//console.log("works.." + JSON.parse(greeting.body).content + JSON.parse(greeting.body).name);
            	this.showMessage(JSON.parse(greeting.body));
        	});
    	});
	}

	// Disconnect websocket connection
	disconnect() {
    	if (this.state.stompClient !== null) {
        	this.state.stompClient.disconnect();
    	}
    	// change state or remove the chatroom
    	console.log("Disconnected");
	}

	// Show messsages to user when receiving new messages from websocket connection
	showMessage(message) {
    	// change state to update divs with message
    	var obj = { name: message.name, content: message.content };
    	this.state.data.push(obj);
    	this.setState({data: this.state.data});
	}

	// Send message to websocket server
	sendMessage = (event) => {
		var code = event.keyCode || event.which;
		if(code === 13) {
    		this.state.stompClient.send("/app/hello", {}, JSON.stringify({'name': this.props.user.firstName, 'content': this.state.inputValue, 'chatId': this.props.chatId})); // Use this.props.userName for name
    		this.setState({inputValue: ''});
    	}
	}

	render(){
		const messageList = this.state.data
		return(
			<OuterDiv>
				<MessageList>
					{messageList.map(message => <MessageDiv><div class='imgDiv'><img src={require('../../images/Slice.png')} /></div><div class='name'><b>{message.name}</b></div><div class='content'>{message.content}</div></MessageDiv>)}
				</MessageList>
				<InputDiv>
					<input name="inputValue" placeholder="Message" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.sendMessage.bind(this)}/>
				</InputDiv>
			</OuterDiv>
		)
	}
}

export default ChatRoom;