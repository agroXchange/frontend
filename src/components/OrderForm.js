import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import '../styles/OrderForm.css'

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

class OrderForm extends PureComponent {
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
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">
        <Paper style={ classes.paper }>
          <TextField
            label="Volume"
            id="volume"
            name="volume"
            value={ this.state.volume }
            onChange={ this.handleChange }
            style={ classes.textField }
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
          />

          <TextField
            id="ico"
            label="ICO"
            name="ICO"
            style={ classes.textField }
            value={ this.state.ICO }
            onChange={ this.handleChange }
            margin="normal"
          />

          <TextField
            id="comments"
            label="Additional Comments"
            name="comments"
            style={ classes.textField }
            value={ this.state.comments }
            onChange={ this.handleChange }
            margin="normal"
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

export default OrderForm
