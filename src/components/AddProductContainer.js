import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductForm from './ProductForm'
import {addProduct} from '../actions/products'



class AddProductContainer extends PureComponent {


    submit = (product, image) => {
        this.props.addProduct(product, image)
    }


    render() {

            return (
                <div className="addProductContainer">
                 <ProductForm onSubmit={this.submit}/>
                </div>
            )
        }
    }


const mapStateToProps = (state) => {
    return {
        student: state.students,
        // batches: state.batches
    }
}

export default connect(mapStateToProps, { addProduct })(AddProductContainer)