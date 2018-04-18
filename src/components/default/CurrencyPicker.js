import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchCurrency } from '../../actions/currencys'
import PropTypes from 'prop-types'

class CurrencyPicker extends PureComponent {

  componentWillMount(props) {
    this.props.fetchCurrency('EUR')
  }

  render() {
    const currency = this.props.currency
    return (
      <div>
        {currency.symbol}
      </div>
    )
  }
}

const mapStateToProps = function(state, props) {
  return {
    currency: state.currency,
  }
}

export default connect(mapStateToProps, { fetchCurrency })(CurrencyPicker)
