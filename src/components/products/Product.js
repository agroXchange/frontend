import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as combine from "lodash/fp/compose"
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import IconButton from "material-ui/IconButton"
import ModeEditIcon from "@material-ui/icons/ModeEdit"
import DeleteIcon from "@material-ui/icons/Delete"
import Button from 'material-ui/Button'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import '../../styles/Product.css'
import { fetchProduct, updateProduct, removeProduct } from '../../actions/products'
import { createOrder } from '../../actions/orders'
import OrderForm from '../orders/OrderForm'
import EditProductForm from './EditProductForm'
import {jwtPayload} from "../../jwt"
import { translate } from "react-i18next"
import { Redirect } from 'react-router'

const stockImage = "https://theculinarycook.com/wp-content/uploads/2012/04/vegetable-stock-679x509.jpg"

const styles = theme => ({
  dialog: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button : {
  marginBottom: 20,
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: `#588D61`,
  color: "white",
  '&:hover': {
     backgroundColor: `#8FBC8F`,
   }
 }
})


class Product extends PureComponent {

  state = {
    newOrder: false,
    confirmOrder: false,
    editProduct: false,
    confirmEdit: false,
    fireRedirect: false
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

  redirect = () => {
    this.setState({ fireRedirect: true })
  }

  createOrder = (order, productId, buyer) => {
    this.props.createOrder(order, this.props.match.params.id, this.props.currentUser)


    this.handleOrderClose()
    this.handleConfirmOpen()
    setTimeout(_ => this.redirect(), 3000)

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

  daysRemaining = (harvested, expiration) => {
    const today = new Date()
    const end = new Date(expiration)
    const diffDays = parseInt((end - today) / (1000 * 60 * 60 * 24))
    if(diffDays < 0) {
      return 0
    } else {
      return diffDays
    }
  }

  render() {
    const { classes, t, product, currentUser, currentUserId, currentProfileId } = this.props
    if (!product) return null

    if (this.state.fireRedirect) {
     return (
       <Redirect to={`/orders`} />
     )
   }

    return(
      <div className="product-container">
        <Button
         onClick={() => this.props.history.goBack()}
         size="medium"
         color="primary"
         style={{display:'flex', flex:1}}
       >
         {t("GO BACK")}
       </Button>

        <Paper className="paper">
        <Paper><h2 className="title">{ product.code.titleeng }</h2></Paper>
          <Grid container className="container" spacing={24}>
            <Grid item xs={12}>
              <img src={ product.photo !== null ?
                product.photo : stockImage }
                alt="product"
                className="product-photo"/>

              { product.volume === 0 ? <h2 className="sold-out-img"> { t("SOLD OUT") } </h2> : "" }

              { this.daysRemaining(product.harvested, product.expiration) === 0 ?
                <h2 className="expired-img"> { t("EXPIRED") } </h2> : "" }

              <div>
                <p>{ this.daysRemaining(product.harvested, product.expiration)}  { t("remaining") } </p>
                <div className="percentage-bar" >
                  <div className="bar" style={{ width: this.progress(product.harvested, product.expiration) }}></div>
                </div>
              </div>

            </Grid>

            <Grid item xs={12} sm={6}>
              <p><b>{ t("Harvest Date") }:</b> { product.harvested }</p>
              <p><b>{ t("Expiry Date") }:</b> { product.expiration }</p>
              <p><b>{ t("Code") }:</b> { product.code.code }</p>
              <p><b>{ t("Volume") }:</b> { product.volume } KG</p>
              <p><b>{ t("Price") }:</b> { product.price } { product.currency } per KG</p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <p><b>{ t("Description") }:</b> { product.description }</p>
              <p><b>{ t("Certification") }:</b> { product.certificate }</p>
              <p><b>{ t("Country") }:</b> { product.seller.country }</p>
              <p><b>{ t("City/Port") }:</b> { product.seller.city }</p>
            </Grid>

            { currentProfileId === product.seller.id &&
              <div>

                <IconButton onClick={this.handleEditOpen} className={ classes.button }>
                  <ModeEditIcon />
                </IconButton>

                <IconButton onClick={this.removeProduct} className={ classes.button }>
                  <DeleteIcon />
                </IconButton>

              </div>
            }


            { currentProfileId !== product.seller.id &&
              product.volume !== 0 &&
              this.daysRemaining(product.harvested, product.expiration) !== 0 &&
              <Button
                color="primary"
                className={ classes.button }
                onClick={this.handleClickOrderOpen}
              >
                New Order
              </Button>
            }

            { currentProfileId !== product.seller.id &&
              <Link style={{textDecoration: 'none'}} to={ `/profiles/${product.seller.id}` }>
                <Button color="primary" className={ classes.button }>View Seller</Button>
              </Link>
            }


            <Dialog
              open={this.state.editProduct}
              onClose={this.handleEditClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title"> { t("Edit Your Product") } </DialogTitle>
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

export default combine(
  translate("product"),
  withStyles(styles),
  connect(mapStateToProps, { fetchProduct, createOrder, updateProduct, removeProduct })
)(Product)
