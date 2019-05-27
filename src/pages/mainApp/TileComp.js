import React from 'react';
import { TileDiv, Tile, TileSpan } from './styles.js';

class TileComp extends React.Component {
	constructor(props){
		super(props);

		this.getGroupsByUser();
		var defaultClickProc = this.getChats.bind(this);
		this.state = {dataReady: false, result:[], clickProc: defaultClickProc};
	}

	componentWillReceiveProps(nextProps) {
		var bindClickProc;
		switch(nextProps.clickProc){
			case 'GroupByUser':
				bindClickProc = this.getChats.bind(this);
				this.getGroupsByUser();
				break;
			case 'Popular':
				bindClickProc = this.getChats.bind(this);
				this.getPopular();
				break;
			case 'Category':
				bindClickProc = this.getGroups.bind(this);
				this.getCategories();
				break;
			case 'Group':
				bindClickProc = this.getChats.bind(this);
				this.getGroups();
				break;
			default: //Chat
				bindClickProc = this.getGroups.bind(this);
				this.getChats();
				break;
		}

		this.setState({clickProc: bindClickProc});
	}

	getGroupsByUser() {
		var endpoint = 'http://localhost:8050/group/' + this.props.userId;
		this.fetchProc(endpoint, this.getChats.bind(this));
	}

	getChatsByUser() {
		var endpoint = 'http://localhost:8040/chat/user/' + this.props.userId;
		this.fetchProc(endpoint, this.getChatRooms.bind(this));
	}

	getPopular() {
		var endpoint = 'http://localhost:8040/popular';
		this.fetchProc(endpoint, this.getChatRooms.bind(this));
	}

    getCategories() {
    	var endpoint = 'http://localhost:8060/category';
    	this.fetchProc(endpoint, this.getGroups.bind(this));
	}

    getGroups() {
    	var endpoint = 'http://localhost:8050/group';
    	this.fetchProc(endpoint, this.getChats.bind(this));
	}

	getChats() {
		var endpoint = 'http://localhost:8040/chat';
		this.fetchProc(endpoint, this.getChatRooms.bind(this));
	}

	getChatRooms() {
		var endpoint = 'http://localhost:8030/chatroom';
		this.fetchProc(endpoint, ""); // Need to set clickProc state to getChatRoom
	}

	fetchProc(endpoint, clickProc) {
		fetch(endpoint)
		.then(response => response.json()
		.then(res => {
			if(res !== null){
				console.log(res);
				this.setState({dataReady: true, result: res, clickProc: clickProc});
				this.props.setTileResult(res);
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	render(){
		const result = this.state.result;

		return(
			<TileDiv>
					{result.map(res => <Tile><TileSpan onClick={this.state.clickProc}>{res.name}</TileSpan></Tile>)}
			</TileDiv>
		)
	}
}

export default TileComp;