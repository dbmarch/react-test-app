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
        <option value="amber">Amber</option>
        <option value="blueGrey">Blue-Gray</option>
        <option value="brown">Brown</option>
        <option value="cyan">Cyan</option>
        <option value="deepOrange">Deep-Orange</option>
        <option value="deepPurple">Deep-Purple</option>
        <option value="green">Green</option>
        <option value="grey">Grey</option>
        <option value="lightBlue">Light Blue</option>
        <option value="lightGreen">Light Green</option>
        <option value="lime">Lime</option>
        <option value="pink">Pink</option>
        <option value="teal">Teal</option>
        <option value="yellow">Yellow</option>
      </Select>
    </FormControl>
  )
}

export default withStyles(styles)(colorSelect)
