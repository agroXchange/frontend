import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { fetchAllProducts } from '../../actions/products';
import '../../styles/Product.css'

class Product extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  renderProduct(product) {
    return (
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
              <p>Country { product.country }</p>
              <p>City/Port: { product.cityPort }</p>

              <Button>Edit Product</Button>
              <Button>Make An Order</Button>

            </Grid>

          </Grid>
        </Paper>
      </div>
    )
  }

  render() {
  const products = this.props.products;

    return(
      <div>
      {products.map(product => (
        this.renderProduct(product)
      ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {fetchAllProducts})(Product)
