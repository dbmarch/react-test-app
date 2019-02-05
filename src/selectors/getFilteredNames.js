import { createSelector } from 'reselect'

export const getNamesSelector = (state) => {
  // console.log(`getNamesSelector (${state.nameList.names.length})`)
  return state.nameList.names
}

export const getKeySelector = (state) => {
  // console.log(`getKeySelector: ${state.nameList.searchKey}`)
  return state.nameList.searchKey
}

export const getFilteredNamesSelector = createSelector([ getNamesSelector, getKeySelector ], (names, searchKey) => {
  // console.log(`getFilteredNamesSelector`)
  if (!searchKey || searchKey === '') {
    console.log('invalid key')
    return names
  }

  const newList = names.filter((name) => {
    return name.toLowerCase().search(searchKey.toLowerCase()) !== -1
  })
  // console.log(`Filtered List: ${newList}`)
  return newList
})
