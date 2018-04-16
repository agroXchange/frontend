import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchMyProducts } from '../../actions/products'

class MyProducts extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchMyProducts(this.props.match.params.id)
  }



  render() {
      const { products } = this.props
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

export default connect(mapStateToProps)(MyProducts)
