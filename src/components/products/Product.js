import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import '../../styles/Product.css'

import OrderForm from '../OrderForm'
import ProductForm from './ProductForm'


const profile = {
  country: "Netherlands",
  cityPort: "Amsterdam"
}


class Product extends PureComponent {

  state = {
    newOrder: false,
    edit: false
  }

  toggleOrder = () => {
    this.setState({
      newOrder: !this.state.newOrder
    })
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  createOrder = (order) => {
    this.props.createBatch(order)
    console.log('Created Batch')
  }

  render() {
    const { product } = this.props
    return(
      <div className="product-container">
        <Paper className="paper">
        <Paper className="title"><h2>{ product.name }</h2></Paper>
          <Grid container className="container">

            <Grid item>
              <img src={ product.photo } className="product-photo"/>
              <p>Code: { product.code }</p>
              <p>Harvested Dated: { product.harvested }</p>
              <p>Expiration Date: { product.expiration }</p>
              <Button color="primary">View Seller</Button>
            </Grid>

            <Grid item>
              <p>{ product.description }</p>
              <p>Volume: { product.volume } KG</p>
              <p>Price: { product.price } { product.currency } per KG</p>
              <p>Certification: { product.certification }</p>
              <p>Country { profile.country }</p>
              <p>City/Port: { profile.cityPort }</p>

              <Button onClick={ this.toggleEdit }>Edit Product</Button>
              <Button onClick={ this.toggleOrder }>Make An Order</Button>

            </Grid>

            {
              this.state.newOrder &&
              <OrderForm onSubmit={ this.createOrder } class="batch-form"/>
            }

            {
              this.state.edit &&
              <ProductForm />
            }

          </Grid>
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Product)
