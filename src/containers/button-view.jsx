import React from 'react'
import NewButtons from '../components/new-buttons'
import OutlinedButtons from '../components/outlined-buttons'
import ButtonSizes from '../components/button-sizes'
import CustomButtons from '../components/custom-buttons'
const ButtonView = (props) => (
  <div>
    <h2>Button Demo</h2>
    <NewButtons />
    <OutlinedButtons />
    <ButtonSizes />
    <CustomButtons />
  </div>
)

export default ButtonView
