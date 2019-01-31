import React from 'react'
import { connect } from 'react-redux'
import { resetList } from '../store/actions/actions'

const FilteredListbox = ({ list, onResetList }) => {
	// console.log(`list: ${JSON.stringify(list, null, 2)}`)

	const listItem = list.map(item => <li key={item}>{item}</li>)

	return (
		<div className="page">
			<div className="list-panel">
				<ul>{listItem}</ul>
			</div>
			<div className="right-panel">
				<input
					type="text"
					className="input-text"
					placeholder="Search..."
					onChange={evt => {
						console.log(`${evt.target.value}`)
					}}
				/>
				<button type="button" className="reset-button" onClick={onResetList}>
					RESET
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		list: state.list.items,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onResetList: () => dispatch(resetList()),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilteredListbox)
