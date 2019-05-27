import { combineReducers } from 'redux'
import { SET_CURRENT_CHATROOM } from '../actions/actions.js'

function todos(state = {}, action) {
	switch (action.type) {
		case SET_CURRENT_CHATROOM:
			return Object.assign({}, state, {
				id: action.id,
				title: 'hey'
			})
		default:
			return state;
	}
}

const chatRoom = combineReducers({
	todos
})

export default chatRoom