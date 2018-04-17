import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchMyProducts } from '../../actions/products'
import { fetchUser } from '../../actions/users'
import {jwtPayload} from "../../jwt"

class MyProducts extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchMyProducts(this.props.match.params.id)
    this.props.fetchUser(this.props.match.params.id)
  }


  render() {
    const { products, currentProfileId } = this.props
    if (!products) return null

    return(
      <div>



        <ProductsList products={ products } />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    products: state.products,
    profile: state.users,
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId
  }
}


export default connect(mapStateToProps, { fetchMyProducts, fetchUser })(MyProducts)
