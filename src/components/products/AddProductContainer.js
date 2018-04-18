import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {  Link, Redirect } from 'react-router-dom'
import ProductForm from './ProductForm'
import Button from "material-ui/Button"
import { addProduct } from '../../actions/products'
import { jwtPayload } from '../../jwt'
import { translate } from "react-i18next"
import * as combine from "lodash/fp/compose"


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

                  <Link style={{textDecoration: 'none'}} to={`/dashboard`}>
                      <Button
                          color="primary"
                          className="submit-btn"
                          type="submit"
                          style={{
                              justify: 'center',
                              textAlign: 'center',
                              display: 'block',
                              margin: 'auto',
                              marginTop: 10,
                              marginBottom: 2,
                              backgroundColor: `#white`,
                              color: "#588D61",
                              '&:hover': {
                                  backgroundColor: `#8FBC8F`,
                              }
                          }}
                      >
                          Back
                   </Button>
                  </Link>


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


export default combine(
    translate("product"),
    connect(mapStateToProps, { addProduct })
)
    (AddProductContainer)
