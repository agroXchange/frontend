import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

class EditProductForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit } className="form-container">

      </form>
    )
  }



}

export default EditProductForm
