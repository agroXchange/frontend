import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import '../../styles/Product.css'
import { fetchProduct } from '../../actions/products'
import OrderForm from '../OrderForm'
import ProductForm from './ProductForm'



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

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  createOrder = (order) => {
    this.props.createBatch(order)
    console.log('Created Batch')
  }

  render() {
    const { product } = this.props
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
    product: state.product,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { fetchProduct })(Product)
