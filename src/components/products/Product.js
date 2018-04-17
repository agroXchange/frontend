import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import compose from 'lodash/fp/compose'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import '../../styles/Product.css'
import { fetchProduct, updateProduct, removeProduct } from '../../actions/products'
import { createOrder } from '../../actions/orders'
import OrderForm from '../orders/OrderForm'
import EditProductForm from './EditProductForm'
import {jwtPayload} from "../../jwt"

const styles = {
  dialog: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  }
}
const stockImage = "https://theculinarycook.com/wp-content/uploads/2012/04/vegetable-stock-679x509.jpg"

class Product extends PureComponent {

  state = {
    newOrder: false,
    confirmOrder: false,
    editProduct: false,
    confirmEdit: false,
    completed: 0
  }



  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }


  handleClickOrderOpen = () => { this.setState({ newOrder: true }) }

  handleOrderClose = () => { this.setState({ newOrder: false }) }

  handleConfirmOpen = () => { this.setState({ confirmOrder: true }) }

  handleConfirmClose = () => { this.setState({ confirmOrder: false }) }

  handleEditOpen = () => { this.setState({ editProduct: true }) }

  handleEditClose = () => { this.setState({ editProduct: false }) }

  handleConfirmEdit = () => { this.setState({ confirmEdit: true }) }

  handleConfirmEditClose = () => { this.setState({ confirmEdit: false })}

  createOrder = (order, productId, buyer) => {
    this.props.createOrder(order, this.props.match.params.id, this.props.currentUser)
    this.handleOrderClose()
    this.handleConfirmOpen()
  }

  updateProduct = (updates) => {
    this.props.updateProduct(this.props.match.params.id, updates)
    this.handleEditClose()
    this.handleConfirmEdit()
  }

  removeProduct = () => {
    this.props.removeProduct(this.props.match.params.id)
  }

  progress = (harvested, expiration) => {
    const start = Date.parse(harvested)
    const end = Date.parse(expiration)
    const today = Date.parse(new Date())
    const p = Math.round(((today - start) / (end - start)) * 100) + '%'
    return p
    
  }

  render() {
    const { classes, product, currentUser, currentUserId, currentProfileId } = this.props
    if (!product) return null
    return(

      <div className="product-container">
        <Paper className="paper">
        <Paper><h2 className="title">{ product.code.titleeng }</h2></Paper>
          <Grid container className="container" spacing={24}>
            <Grid item xs={12}>
              <img src={ product.photo !== null ?
                product.photo : stockImage }
                alt="product"
                className="product-photo"/>

              { product.volume === 0 ? <h2>UNAVAILABLE</h2> : "" }

              <div>
                <p>Remaining Time</p>
                <div className="percentage-bar" >
                  <div className="bar" style={{ width: this.progress(product.harvested, product.expiration) }}></div>
                </div>
              </div>

            </Grid>

            <Grid item xs={12} sm={6}>
              <p><b>Code:</b> { product.code.code }</p>
              <p><b>Harvested Dated:</b> { product.harvested }</p>
              <p><b>Expiration Date:</b> { product.expiration }</p>
              <p><b>Volume:</b> { product.volume } KG</p>
              <p><b>Price:</b> { product.price } { product.currency } per KG</p>

              { currentProfileId !== product.seller.id &&

                <Link to={ `/profiles/${product.seller.id}` }>
                  <Button color="primary">View Seller</Button>
                </Link>
              }
            </Grid>

            <Grid item xs={12} sm={6}>
              <p><b>Description:</b> { product.description }</p>
              <p><b>Certification:</b> { product.certificate }</p>
              <p><b>Country</b> { product.seller.country }</p>
              <p><b>City/Port:</b> { product.seller.city }</p>

              { currentProfileId === product.seller.id &&
                <div>
                  <Button onClick={ this.handleEditOpen }>Edit Product</Button>
                  <Button onClick={ this.removeProduct }>Remove Product</Button>
                </div>
              }

              { currentProfileId !== product.seller.id &&
                <Button onClick={this.handleClickOrderOpen}>Make New Order</Button>
              }

            </Grid>


            <Dialog
              open={this.state.editProduct}
              onClose={this.handleEditClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Edit Your Product</DialogTitle>
                <EditProductForm initialValues={ product } onSubmit={ this.updateProduct }/>
            </Dialog>

            <Dialog
              open={this.state.newOrder}
              onClose={this.handleOrderClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Please enter your order</DialogTitle>
                <OrderForm onSubmit={ this.createOrder } class="batch-form"/>
            </Dialog>

            <Dialog
              open={ this.state.confirmOrder }
              onClose={ this.handleConfirmClose }
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Thankyou. Your order has been recieved.</DialogTitle>
            </Dialog>

            <Dialog
              open={ this.state.confirmEdit }
              onClose={ this.handleConfirmEditClose }
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Thankyou. Your listing has been updated.</DialogTitle>
            </Dialog>

          </Grid>

          <Button color="inherit" onClick={() => this.props.history.goBack()}>
          	Go Back
          </Button>
        </Paper>

      </div>
    )
  }

}

const mapStateToProps = function(state, props) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    product: state.product,
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchProduct, createOrder, updateProduct, removeProduct })
)(Product)
