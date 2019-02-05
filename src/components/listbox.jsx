import React from 'react'

const Listbox = ({ names }) => {
  // console.log(names)
  if (!names) return <div>EMPTY</div>
  const listItem = names.map((name, i) => <li key={i}>{name}</li>)

  return (
    <div className="list-panel">
      <ul>{listItem}</ul>
    </div>
  )
}

export default Listbox
