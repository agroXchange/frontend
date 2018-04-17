import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchProductForm from './SearchProductForm'
import { filterProducts } from '../../actions/products'



class SearchProductContainer extends PureComponent {


    submit = (product) => {
        this.props.filterProducts(product)
    }


    render() {

        return (
            <div className="SearchProductContainer">
                <SearchProductForm onSubmit={this.submit} />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    codes: state.codes,
    vegetables: state.codes.filter(x => x.code.match(/^07/)),
    fruits: state.codes.filter(x => x.code.match(/^08/)),
    beans: state.codes.filter(x => x.code.match(/^09/))
})

export default connect(mapStateToProps, { filterProducts })(SearchProductContainer)