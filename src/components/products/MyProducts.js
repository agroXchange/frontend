import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchMyProducts } from '../../actions/products'
import { fetchUser } from '../../actions/users'
import {jwtPayload} from "../../jwt"
import { Link } from 'react-router-dom'
import { withStyles } from "material-ui/styles"
import Button from "material-ui/Button"
import * as combine from "lodash/fp/compose"
import { translate } from "react-i18next"

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 150
  }
})

class MyProducts extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchMyProducts(this.props.match.params.id)
    this.props.fetchUser(this.props.match.params.id)
  }


  render() {
    const { t, classes, products, currentProfileId, user } = this.props
    if (!products) return null
    if (!user) return null

    return(
      <div>
        <Button
         onClick={() => this.props.history.goBack()}
         size="medium"
         color="primary"
         style={{display:'flex', flex:1}}
        >
         { t("GO BACK") }
       </Button>

        { currentProfileId === user.id ?
          <h2>{ t("My Products") }</h2> : <h2>{user.name}</h2> }

        { products.length === 0 && currentProfileId === user.id ?
          <div>
            <p>{ t("You Have No Products") }</p>
          </div> : " " }

          { products.length === 0 && currentProfileId !== user.id ?
            <div>
              <p>{ t("No Products") }</p>
            </div> : " " }

        { currentProfileId === user.id ?
          <Link style={{textDecoration: 'none'}} to="/products/new">
            <Button
              className={ classes.button }
              variant="raised"
              color="primary" >
                {t("Add Product")}
            </Button>
          </Link> : " " }

        <ProductsList products={ products } />

      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    products: state.products,
    user: state.user,
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId
  }
}


export default combine(
  translate("product", "navBar"),
  withStyles(styles),
  connect(mapStateToProps, { fetchMyProducts, fetchUser }))(MyProducts)
