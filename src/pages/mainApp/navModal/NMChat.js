import React from 'react';
import { OuterDiv, NMGroupDiv, NMChatDiv, ChatTitleDiv, GroupTitleDiv, ListItem } from './style.js';
import CreateModal from './CreateModal.js';

class NMChat extends React.Component {
	constructor(props){
		super(props);
		this.state = {chatList: [], groupList: [], showModal: false, listType: ''};

		this.toggleModal = this.toggleModal.bind(this);
	}

	// Method to get all chats and groups the user is subscribed to
	componentWillReceiveProps(nextProps) {
		this.setState({chatList: nextProps.chatList, groupList: nextProps.groupList});
	}

	// Renders component to create chats/groups
	toggleModal(event){
		const name = event.target.getAttribute('name');
		console.log("toggling" + name);
		if(name === 'outer' || name === 'ChatTitle' || name === 'GroupTitle')
			this.setState({showModal: !this.state.showModal, listType: name === 'ChatTitle' ? 'Chat' : 'Group'});
	}

	render(){
		const cList = this.state.chatList.map(res => <ListItem>{res.name}</ListItem>);
		const gList = this.state.groupList.map(res => <ListItem>{res.name}</ListItem>);
		let modal;

		//if(this.state.showModal)
		//	modal = <CreateModal show={this.state.showModal} toggleModal={this.toggleModal} listType={this.state.listType} />;

		return(
             <OuterDiv>
             	<CreateModal show={this.state.showModal} toggleModal={this.toggleModal} listType={this.state.listType} />
             	<NMChatDiv>
             		<ChatTitleDiv name='ChatTitle' onClick={this.toggleModal}>Chats</ChatTitleDiv>
             		{cList}
             	</NMChatDiv>
             	<NMGroupDiv>
             		<GroupTitleDiv name='GroupTitle' onClick={this.toggleModal}>Groups</GroupTitleDiv>
             		{gList}
             	</NMGroupDiv>
             </OuterDiv>
		);
	}
}

export default NMChat;