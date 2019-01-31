import * as actionTypes from './actionTypes'

export const resetList = () => {
	return {
		type: actionTypes.RESET_LIST,
	}
}

export const searchList = key => {
	return {
		type: actionTypes.SEARCH_LIST,
		payload: key,
	}
}
