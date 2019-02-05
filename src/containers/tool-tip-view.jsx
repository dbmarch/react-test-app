import React from 'react'
import CustomToolTip from '../components/tool-tip-custom'
import DelayToolTip from '../components/tool-tip-delay'
const ToolTipView = (props) => (
  <div>
    <h2>Tool Tip Demo</h2>
    <CustomToolTip />
    <div style={{ width: '50%' }}>
      <DelayToolTip style={{ margin: '1rem auto', display: 'block' }} />
    </div>
  </div>
)

export default ToolTipView
