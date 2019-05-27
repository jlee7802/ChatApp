import React from 'react'
import { Redirect, withRouter} from 'react-router-dom'
import { MainDiv } from '../components/styles.js'
import TopNavBar from './mainApp/TopNavBar.js'
import NavModal from './mainApp/NavModal.js'
import TileComp from './mainApp/TileComp.js'
import ChatRoom from './mainApp/ChatRoom.js'
import { createStore } from 'redux'
import chatRoom from '../reducers/reducers.js'
import { setCurrentChatroom } from '../actions/actions.js'

const store = createStore(chatRoom)

class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {userId: this.props.userId, clickProc: '', goToGroup: false} // Might not need the userId state, just use the prop passed in

		this.setClickProc = this.setClickProc.bind(this)
	}

	componentWillMount() {
		document.body.style.margin = 0
	}

	componentDidMount() {
	}

	// arrow function to redirect user to group page
	goToGroup = () => {
		this.setState({goToGroup: true})
	}

	setClickProc(clickProc) {
		this.setState({clickProc: clickProc})
	}

	render(){
		store.dispatch(setCurrentChatroom(1))
		let chatObj = store.getState()

		let centerComp = {};
		if(this.state.goToGroup){
			return <Redirect to='/group' />
		}

		if(true)
			centerComp = <ChatRoom userId={this.props.userName} title='chat hoora' chatId={chatObj.todos.id}/>
		else
			centerComp = <TileComp userId={this.props.userId} clickProc={this.state.clickProc} setTileResult={this.setTileResult}/>

		return(
			<MainDiv>
				<TopNavBar title='chat hoor' />
				<NavModal setClickProc={this.setClickProc} userId={this.state.userId}/>
				{centerComp}
			</MainDiv>
		)
	}
}

export default withRouter(DashBoard);