import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import { MainDiv } from '../components/styles.js';
import TopNavBar from './mainApp/TopNavBar.js';
import { TileDiv, Tile, TileSpan } from './mainApp/styles.js';

class Group extends React.Component {
	constructor(props){
		super(props);
		this.state = {groupsReady: false, groups: [], goToChat: false, searchById: -1};
	}

	componentWillMount() {
		document.body.style.margin = 0;
	}

	componentDidMount() {
		this.getAllGroups();
	}

	getAllGroups() {
		var endpoint = 'http://localhost:8050/group';
		this.fetchProc(endpoint);
	}

	getGroupByCategory() {
		var endpoint = 'http://localhost:8050/group/' + this.state.searchById;
		this.fetchProc(endpoint);
	}

	getGroupByUserId() {
		var endpoint = 'http://localhost:8050/group/' + this.props.userId;
		this.fetchProc(endpoint);
	}

	fetchProc(endpoint) {
		fetch(endpoint)
		.then(response => response.json()
		.then(res => {
			if(res !== null){
				console.log(res);
				this.setState({groupsReady: true, groups: res});
			}
		}).catch(err => {
			console.log(err)
		}));
	}

	goToChat = () => {
		this.setState({goToChat: true});
	}

	render(){
		if(this.state.goToChat){
			return <Redirect to='/chat' />;
		}

		const groups = this.state.groups;

		return(
			<MainDiv>
				<TopNavBar/>
				<TileDiv>
					{groups.map(group => <Tile><TileSpan onClick={this.goToChat}>{group.groupName}</TileSpan></Tile>)}
				</TileDiv>
			</MainDiv>
		)
	}
}

export default Group;