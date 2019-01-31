import * as actionTypes from '../actions/actionTypes'
import faker from 'faker'

const initialState = {
	names: [],
	searchKey: '',
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.RESET_LIST:
			const newList = []
			let n = 100
			while (n) {
				newList.push(faker.name.findName())
				n--
			}
			return { ...state, names: newList }

		case actionTypes.SEARCH_LIST:
			// console.log(`action.payload : ${JSON.stringify(action.payload, null, 2)}`)
			return { ...state, searchKey: action.payload }

		default:
			return state
	}
}

export default reducer
