import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import '../../styles/ProductForm.css'

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

    const initialValues = this.props.initialValues || {}
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">
        <Paper className="paper">

        <h2>Add a Product</h2>

        <TextField
          id="name"
          label="Name"
          name="name"
          style={ classes.textField }
          value={ this.state.name || initialValues.name || ''}
          onChange={ this.handleChange }
          margin="normal"

        />

        <div className="upload">
          <label htmlFor="photo">Please Upload a Photo </label>
          <input
            accept="image/*"
            id="raised-button-file"
            type="file"
            name="photo"
            className="upload-input"
            style={ classes.textField }
            onChange={this.handleFileChange}
          />
        </div>

        <TextField
          id="description"
          name="description"
          label="Description"
          style={ classes.textField }
          value={ this.state.description || initialValues.description || ''  }
          onChange={ this.handleChange }
          margin="normal"
        />

        <TextField
          id="currency"
          name="currency"
          select
          label="Please select your currency"
          style={ classes.textField }
          value={ this.state.currency || initialValues.currency || ''}
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
          id="price"
          name="price"
          label="Price per Kg"
          value={ this.state.price || initialValues.price || ''}
          onChange={ this.handleChange }
          type="number"
          style={ classes.textField }
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          label="Volume"
          id="volume"
          name="volume"
          value={ this.state.volume || initialValues.volume || ''}
          onChange={ this.handleChange }
          style={ classes.textField }
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />

        <TextField
          id="certification"
          name="certification"
          label="Certification"
          style={ classes.textField }
          value={ this.state.certification || initialValues.certification || ''}
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
          style={ classes.textField }
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
          Save
        </Button>

        </Paper>
      </form>
    )
  }

}


export default ProductForm
