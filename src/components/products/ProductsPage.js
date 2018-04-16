import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchAllProducts } from '../../actions/products'

class ProductsPage extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchAllProducts()
  }

  render() {
    const { products, currentUserRole } = this.props
    if (!products) return null

    return(
      <div>
        <ProductsList products={ products } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { fetchAllProducts })(ProductsPage)
