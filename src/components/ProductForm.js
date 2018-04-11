import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
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
    width: 200,
  },
  menu: {
    width: 200,
  },
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
];

class ProductForm extends PureComponent {
  state = {
    currency: 'EUR',
  }

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

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

  handleFileChange = (e) => {
    this.setState({
      picture: e.target.files[0]
    })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">

      <h2>Please Add a Product</h2>

      <TextField
        id="name"
        label="Name"
        name="name"
        className="textField"
        value={ this.state.name }
        onChange={ this.handleChange }
        margin="normal"
        style={{
          marginRight: 20,
        }}
      />

      <input
        accept="image/*"
        id="raised-button-file"
        type="file"
        name="photo"
        onChange={this.handleFileChange}
      />

      <TextField
        id="description"
        name="description"
        label="Description"
        className="textField"
        value={ this.state.description }
        onChange={ this.handleChange }
        margin="normal"
      />

      <TextField
        id="currency"
        name="currency"
        select
        label="Please select your currency"
        className="textField"
        value={ this.state.currency }
        onChange={ this.handleChange }
        margin="normal"
        style={{
          width: 200
        }}
      >
        { currencies.map(option => (
          <MenuItem key={ option.value } value={ option.value } >
            { option.label }
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="price"
        name="price"
        label="Price per Kg"
        value={ this.state.price }
        onChange={ this.handleChange }
        type="number"
        className={ classes.textField }
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />

      <TextField
        label="Volume"
        id="volume"
        name="volume"
        value={ this.state.volume }
        onChange={ this.handleChange }
        className=""
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      <TextField
        id="certification"
        name="certification"
        label="Certification"
        className="textField"
        value={ this.state.certification }
        onChange={ this.handleChange }
        margin="normal"
      />

      <TextField
        id="harvested"
        name="harvested"
        label="Harvested Date"
        type="date"
        defaultValue="2017-05-24"
        onChange={ this.handleChange }
        className=" "
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="expired"
        name="expired"
        label="Expiry Date"
        type="date"
        defaultValue="2017-05-24"
        onChange={ this.handleChange }
        className=" "
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button color="primary" className={classes.button}>
        Save
      </Button>

      </form>
    )
  }

}


export default ProductForm
