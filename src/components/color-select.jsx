import React from 'react'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const colorSelect = ({ label, id, color, onColorChange, classes }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        native
        inputProps={{
          name: label,
          id: id
        }}
        value={color}
        onChange={(event) => onColorChange(event.target.value)}
      >
        <option value="red">Red </option>
        <option value="blue">Blue </option>
        <option value="orange">Orange </option>
        <option value="purple">Purple </option>
        <option value="indigo">Indigo </option>
      </Select>
    </FormControl>
  )
}

export default withStyles(styles)(colorSelect)
