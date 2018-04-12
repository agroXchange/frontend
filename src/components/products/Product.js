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
    edit: false,
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  createOrder = (order, productId, buyer) => {
    this.props.createOrder(order, this.props.match.params.id, this.props.currentUser)
    this.handleClose()
    console.log(this.props.currentUser)
    console.log(order)
    console.log(this.props.match.params.id)
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

              {console.log(currentUser.id)}
            </Grid>

            <Grid item>
              <p>{ product.description }</p>
              <p>Volume: { product.volume } KG</p>
              <p>Price: { product.price } { product.currency } per KG</p>
              <p>Certification: { product.certificate }</p>
              <p>Country { product.seller.country }</p>
              <p>City/Port: { product.seller.city }</p>

              <Button onClick={ this.toggleEdit }>Edit Product</Button>
              <Button onClick={this.handleClickOpen}>Make New Order</Button>
            </Grid>


            {
              this.state.edit &&
              <ProductForm />
            }


            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
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
