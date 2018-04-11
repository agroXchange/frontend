import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductForm extends PureComponent {
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
      <div>
      </div>
    )
  }

}

export default ProductForm
