import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import '../../styles/Product.css'
import { fetchProduct } from '../../actions/products'
import { createOrder } from '../../actions/orders'
import OrderForm from '../OrderForm'
import ProductForm from './ProductForm'



class Product extends PureComponent {

  state = {
    newOrder: false,
    editProduct: false
  }

  handleClickOrderOpen = () => {
    this.setState({ newOrder: true });
  };

  handleOrderClose = () => {
    this.setState({ newOrder: false });
  };

  handleEditOpen = () => {
    this.setState({ editProduct: true });
  };

  handleEditClose = () => {
    this.setState({ editProduct: false });
  };


  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  createOrder = (order, productId, buyer) => {
    this.props.createOrder(order, this.props.match.params.id, this.props.currentUser)
    this.handleOrderClose()
  }

  render() {
    const { product, currentUser } = this.props
    if (!product) return null

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

              <Link to={ `/profiles/${product.seller.id}` }>
                <Button color="primary">
                  View Seller
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <p>{ product.description }</p>
              <p>Volume: { product.volume } KG</p>
              <p>Price: { product.price } { product.currency } per KG</p>
              <p>Certification: { product.certificate }</p>
              <p>Country { product.seller.country }</p>
              <p>City/Port: { product.seller.city }</p>

              <Button onClick={ this.handleEditOpen }>Edit Product</Button>
              <Button onClick={this.handleClickOrderOpen}>Make New Order</Button>
            </Grid>


            <Dialog
              open={this.state.editProduct}
              onClose={this.handleEditClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Edit Your Product</DialogTitle>
                <ProductForm inititalValues={ product } onSubmit={ this.updateProduct }/>
            </Dialog>



            <Dialog
              open={this.state.newOrder}
              onClose={this.handleOrderClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Please enter your order</DialogTitle>
                <OrderForm onSubmit={ this.createOrder } class="batch-form"/>
            </Dialog>

          </Grid>
        </Paper>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchProduct, createOrder })(Product)
