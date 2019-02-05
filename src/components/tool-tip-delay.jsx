import React from 'react'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const DelayTooltips = (props) => {
  return (
    <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
      <Button {...props}>[500ms, 200ms]</Button>
    </Tooltip>
  )
}

export default DelayTooltips
