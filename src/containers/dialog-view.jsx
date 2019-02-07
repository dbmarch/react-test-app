import React from 'react'
import SimpleDialog from '../components/dialog-simple'
import AlertDialog from '../components/dialog-alert'
import FormDialog from '../components/dialog-form'
import FullScreenDialog from '../components/dialog-full-screen'

const DialogView = (props) => (
  <div>
    <h2>Dialog Demo</h2>

    <div className="side-side">
      <SimpleDialog />
      <AlertDialog />
      <FormDialog />
      <FullScreenDialog />
    </div>
  </div>
)

export default DialogView
