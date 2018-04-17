import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import ProductForm from './ProductForm'
import { addProduct } from '../../actions/products'
import { jwtPayload } from '../../jwt'


class AddProductContainer extends PureComponent {

    state = {
        redirectToNext: false
    }


    submit = (product, image) => {
        this.props.addProduct(product, image)
        this.setState({ redirectToNext: true })
    }




    render() {

        const { currentProfileId, currentUser } = this.props
        if (!currentUser) return <Redirect to="/" />

        if (this.state.redirectToNext) {
            return (
                <Redirect to={`/profiles/${currentProfileId}/products/`} />
            )
        }

            return (
                <div className="AddProductContainer">
                 <ProductForm onSubmit={this.submit}/>
                </div>
            )
        }
    }


const mapStateToProps = function (state) {
    const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
    return {
        currentUser: state.currentUser,
        currentUserRole: jwtDecoded.role,
        currentUserId: jwtDecoded.id,
        currentProfileId: jwtDecoded.profileId
    }
}

export default connect(mapStateToProps, { addProduct })(AddProductContainer)