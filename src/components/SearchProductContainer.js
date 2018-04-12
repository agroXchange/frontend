import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm'
import { searchProduct } from '../actions/products'



class SearchProductContainer extends PureComponent {


    submit = (product) => {
        this.props.searchProduct(product)
    }


    render() {

        return (
            <div className="addProductContainer">
                <ProductForm onSubmit={this.submit} />
            </div>
        )
    }
}




export default connect(null, { searchProduct })(SearchProductContainer)