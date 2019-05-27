import React from 'react';
import { NavModalDiv, NavUserProfile, NavMButton } from './styles.js';
import NMChat from './navModal/NMChat.js';

class NavModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {groupList: [], chatList: []};

		this.setPopular = this.setPopular.bind(this);
		this.setCategory = this.setCategory.bind(this);
		this.setGroup = this.setGroup.bind(this);
		this.setChat = this.setChat.bind(this);
	}

	componentWillMount() {
		this.fetchProc('http://localhost:8050/group/' + this.props.userId, 'group');
		this.fetchProc('http://localhost:8040/chat/user/' + this.props.userId, 'chat');
	}

	setPopular(){
		this.props.setClickProc('Popular');
	}

	setCategory(){
		this.props.setClickProc('Category');
	}

	setGroup(){
		this.props.setClickProc('Group');
	}

	setChat(){
		this.props.setClickProc('Chat');
	}

	fetchProc(endpoint, listType) {
		fetch(endpoint)
		.then(response => response.json()
		.then(res => {
			if(res !== null){
				console.log(res);
				if(listType === 'group')
					this.setState({groupList: res});
				else
					this.setState({chatList: res});
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	render(){
		return(
             <NavModalDiv>
             	<NavUserProfile>User Profile</NavUserProfile>
             	<NavMButton key='Popular' name='Popular' onClick={this.setPopular}>Popular</NavMButton>
             	<NavMButton key='Category' name='Category' onClick={this.setCategory}>Category</NavMButton>
             	<NavMButton key='Group' name='Group' onClick={this.setGroup} >Group</NavMButton>
             	<NavMButton key='Chat' name='Chat' onClick={this.setChat} >Chat</NavMButton>
             	<NMChat chatList={this.state.chatList} groupList={this.state.groupList}/>
             </NavModalDiv>
		);
	}
}

export default NavModal;