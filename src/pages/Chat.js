import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { MainDiv } from '../components/styles.js'
import TopNavBar from './mainApp/TopNavBar.js';
import { TileDiv, Tile, TileSpan } from './mainApp/styles.js';

class Chat extends React.Component {
	constructor(props){
		super(props);
		alert(this.props.groupId);
		this.state = {chatsReady: false, chats: [], goToChatRoom: false, groupId: this.props.groupId};
	}

	componentWillMount() {
		document.body.style.margin = 0;
	}

	componentDidMount() {
		this.getAllChats();
	}

	getAllChats() {
		fetch('http://localhost:8040/chat/' + this.state.groupId)
		.then(response => response.json()
		.then(res => {
			if(res !== null){
				console.log(res);
				this.setState({chatsReady: true, chats: res});
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	goToChatRoom = () => {
		this.setState({goToChatRoom: true});
	}

	render(){
		const chats = this.state.chats;

		if(this.state.goToChatRoom){
			return <Redirect to='/chat/room' />;
		}

		return(
			<MainDiv>
				<TopNavBar/>
				<TileDiv>
					{chats.map(chat => <Tile><TileSpan onClick={this.goToChatRoom}>{chat.chatName}</TileSpan></Tile>)}
				</TileDiv>
			</MainDiv>
		)
	}
}

export default Chat;