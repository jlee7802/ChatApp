// action types
export const SET_CURRENT_CHATROOM = 'SET_CURRENT_CHATROOM'

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL'
}

// action creators
export function setCurrentChatroom(id) {
	return { type: SET_CURRENT_CHATROOM, id }
}