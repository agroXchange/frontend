import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import '../../styles/ProductForm.css'

import 'foundation-sites/dist/css/foundation.min.css';
import zIndex from 'material-ui/styles/zIndex';

import { vegetables, fruits, beans } from '../productCodes'
import { fetchCodes } from '../actions/codes'


import jquery from 'jquery';
window.$ = window.jQuery = jquery;
require('foundation-sites');


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

//    if (name === "name") document.querySelector('#test:a').classList.toggle("hide")
   // if (name === "name") $('#element').foundation('_hideAll');


    this.setState({
      [name]: value

      
    })

  }

  handleFileChange = (e) => {
    this.setState({
      picture: e.target.files[0]
    })
  }

  componentWillMount = () => {
    this.props.fetchCodes()
  }


  render() {
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">
        <Paper className="paper">

        <h2>Add a Product</h2>

          <div>
            <ul className="vertical menu drilldown" 
            data-drilldown
              data-auto-height="true"
              data-scroll-top="true"   
          >
     <div id ="test">       
              <li>
                <a href="#"> Vegetables   </a>
                <ul className="menu vertical nested">
                  {vegetables.map(veg =>
                    <li key={Object.getOwnPropertyNames(veg)}
                      name="name"
                      value={Object.values(veg)[0]}
                      onClick={this.handleChange}
                      type="button"
                        data-close-on-click="true"
                    >

                      <a href="#"

                      
                      >{Object.getOwnPropertyNames(veg)}</a>
                      <ul className="menu vertical nested">
                        <li><a href="#" >Two AAAA</a></li>
                      </ul>

                      {/* <div 
                        name="name"
                        
                        value={Object.getOwnPropertyNames(veg)}
                        
                        onClick={this.handleChange}
                      >
                        {Object.getOwnPropertyNames(veg)}
                      </div> */}

                    </li>
                  )}
                </ul>
              </li>
              <li>
                <a href="#"> Fruits & Nuts   </a>
                <ul className="menu vertical nested">
                  {fruits.map(fruit =>
                    <li key={Object.getOwnPropertyNames(fruit)}>
                      <button 
                        name="name"
                        className="button"
                          value={Object.values(fruit)[0]}
                        type="button"
                        onClick={this.handleChange}
                        
                      >
                        {Object.getOwnPropertyNames(fruit)}

                      </button>
                    </li>

                  )}
                </ul>
              </li>
              <li>
                <a href="#"> Beans & Crop   </a>
                <ul className="menu vertical nested">
                  {beans.map(bean =>
                    <li key={Object.getOwnPropertyNames(bean)}>
                      <button 
                        name="name"
                        className="button"
                          value={Object.values(bean)[0]}
                        type="button"
                        onClick={this.handleChange}
                      >
                        {Object.getOwnPropertyNames(bean)}

                      </button>
                    </li>

                  )}
                </ul>
              </li>
   </div>           
            </ul>
          </div>

          {/* <Drilldown 
            id="name"
            label="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            style={{ zIndex: 100, position: "absolute"}}
          /> */}

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
          value={ this.state.description }
          onChange={ this.handleChange }
          margin="normal"
        />

        <TextField
          id="currency"
          name="currency"
          select
          label="Please select your currency"
          style={ classes.textField }
          value={ this.state.currency }
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
          value={ this.state.price }
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
          value={ this.state.volume }
          onChange={ this.handleChange }
          style={ classes.textField }
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />

        <TextField
          id="certification"
          name="certificate"
          label="Certification"
          style={ classes.textField }
            value={this.state.certificate }
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
            name="expiration"
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



export default connect(null, { fetchCodes })(ProductForm)
