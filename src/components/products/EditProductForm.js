import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';

const classes = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    width: 200,
  },
  menu: {
    width: 200,
  },
  paper: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  }
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'COP',
    label: 'COL $'
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

class EditProductForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const initialValues = this.props.initialValues || {}
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">
        <Paper style={ classes.paper }>
          <TextField
            label="Description"
            id="description"
            name="description"
            value={ this.state.description || initialValues.description || " " }
            onChange={ this.handleChange }
            style={ classes.textField }
          />

          <TextField
            id="certification"
            name="certificate"
            label="Certification"
            style={classes.textField}
            value={this.state.certificate || initialValues.certificate || '' }
            onChange={this.handleChange}
            margin="normal"
          />

          <TextField
            id="price"
            name="price"
            label="Price per Kg"
            value={this.state.price || initialValues.price || '' }
            onChange={this.handleChange}
            type="number"
            style={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          <TextField
            id="currency"
            name="currency"
            select
            label="Please select your currency"
            style={ classes.textField }
            value={ this.state.currency || initialValues.currency || ''  }
            onChange={ this.handleChange }
            margin="normal"
          >
            { currencies.map(option => (
              <MenuItem key={ option.value } value={ option.value } >
                { option.label }
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Volume"
            id="volume"
            name="volume"
            value={ this.state.volume || initialValues.volume || '' }
            onChange={ this.handleChange }
            style={ classes.textField }
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
          />

          <TextField
            id="harvested"
            name="harvested"
            label="Harvested Date"
            type="date"
              value={this.state.harvested || initialValues.harvested || '' }
            onChange={ this.handleChange }
            style={ classes.textField }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="expired"
              name="expiration"
            label="Expiry Date"
            type="date"
              value={this.state.expiration || initialValues.expiration || '' }
            onChange={ this.handleChange }
            style={ classes.textField }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button
            color="primary"
            className="submit-btn"
            type="submit"
            style={{
              display: 'block',
              margin: 'auto',
              marginTop: 20,
              marginBottom: 20
            }}
          >
            Order
          </Button>

        </Paper>
      </form>
    )
  }



}

export default EditProductForm
