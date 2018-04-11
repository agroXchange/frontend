import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
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
];

class ProductForm extends PureComponent {
  state = {
    currency: 'EUR',
  }

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

    return(
      <form onSubmit={ this.handleSubmit } className="form-container">

      <TextField
        id="name"
        label="name"
        name="name"
        className="text-input"
        value={ this.state.name }
        onChange={ this.handleChange }
        margin="normal"
      />

      <TextField
        id="description"
        name="description"
        label="Description"
        className="text-input"
        value={ this.state.description }
        onChange={ this.handleChange }
        margin="normal"
      />

      <TextField
        id="currency"
        name="currency"
        select
        label="Select"
        className="text-input"
        value={ this.state.currency }
        onChange={ this.handleChange }
        helperText="Please select your currency"
        margin="normal"
      >
        { currencies.map(option => (
          <MenuItem key={ option.value } value={ option.value } >
            { option.label }
          </MenuItem>
        ))}
      </TextField>


      </form>
    )
  }

}

export default ProductForm
