import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import ProductForm from './ProductForm'
import { addProduct } from '../../actions/products'



class AddProductContainer extends PureComponent {

    state = {
        redirectToNext: false
    }


    submit = (product, image) => {
        this.props.addProduct(product, image)
        this.setState({ redirectToNext: true })
    }




    render() {

        if (this.state.redirectToNext) {
            return (
                <Redirect to={`profile/`} />
            )
        }

            return (
                <div className="AddProductContainer">
                 <ProductForm onSubmit={this.submit}/>
                </div>
            )
        }
    }



export default connect(null, { addProduct })(AddProductContainer)