import React from 'react'
import { connect } from 'react-redux'
import { resetList, searchList } from '../actions/actions'
import Listbox from '../components/listbox'
import { getFilteredNamesSelector, getNamesSelector } from '../selectors/getFilteredNames'

const FilteredListbox = ({ names, filteredNames, onResetList, onSearchNames }) => {
	// console.log('filteredNames: ', filteredNames)
	return (
		<div className="page">
			<Listbox names={names}> </Listbox>
			<Listbox names={filteredNames} />
			<div className="right-panel">
				<input
					type="text"
					className="input-text"
					placeholder="Search..."
					onChange={evt => {
						console.log(`${evt.target.value}`)
						onSearchNames(evt.target.value)
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
		names: getNamesSelector(state),
		filteredNames: getFilteredNamesSelector(state),
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onResetList: () => dispatch(resetList()),
		onSearchNames: value => dispatch(searchList(value)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilteredListbox)
