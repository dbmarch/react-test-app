import React from 'react'
import SnackBar from '../components/snack-bar-custom'
import SnackBarDirection from '../components/snack-bar-direction'

const TabView = (props) => (
  <div className="side-side">
    <div>
      <h2>Snackbar Demo</h2>
      <SnackBar />
    </div>

    <div>
      <h2>Snack Bar from different directions: </h2>
      <SnackBarDirection />
    </div>
  </div>
)

export default TabView
