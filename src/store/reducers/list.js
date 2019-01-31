import * as actionTypes from '../actions/actionTypes'
import faker from 'faker'

const initialState = {
	items: ['Item 1', 'Item 2'],
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
			return {
				...state,
				items: newList,
			}

		default:
			return state
	}
}

export default reducer
