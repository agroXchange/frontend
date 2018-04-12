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
      <h2>{ product.name }</h2>
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
