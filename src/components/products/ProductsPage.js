import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchAllProducts, filterProducts } from '../../actions/products'
import Button from 'material-ui/Button'
import Dialog, { DialogContent, DialogContentText, withMobileDialog, } from 'material-ui/Dialog'
import SearchProductForm from './SearchProductForm';
import Settings from '@material-ui/icons/Settings'
import Cached from '@material-ui/icons/Cached'
import { FormControlLabel } from 'material-ui/Form';
import { withStyles } from "material-ui/styles";
import * as combine from "lodash/fp/compose";
import Checkbox from 'material-ui/Checkbox';
import { translate } from "react-i18next";


  const styles = theme => ({
  tuneIcon: {
    position: "relative",
    right: 50,
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: `#588D61`,
    color: "white",
    '&:hover': {
      backgroundColor: `#8FBC8F`,
    },
  },
});

class ProductsPage extends PureComponent {
  state = {
    open: false,
  }

  componentWillMount(props) {
    this.props.fetchAllProducts()
  }


  submit = (preferences) => {
    this.props.filterProducts(preferences)
    this.setState({ open: false })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }


  render() {
      const { fullScreen, classes, t, products, currentUserRole } = this.props
    if (!products) return null
    console.log(products[0])

    return(
      <div>
        <div className="product-container">
          <Button
            onClick={() => this.props.history.goBack()}
            size="medium"
            color="primary"
            style={{ display: 'flex', flex: 1 }}
          >
            {t("GO BACK")}
       </Button>
       </div>


        <Button
          onClick={this.handleClickOpen}
          variant="raised"
          color="primary"
          className={classes.button}
        >
         <Settings/>
          Filter
        </Button>

        <Button
          onClick={this.submit}
          variant="raised"
          color="primary"
          className={classes.button}
        >
          <Cached className={classes.cachedIcon} />
          <div>All</div>

        </Button>

        {/* <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" /> */}

        <p>{
          // !products[0].currency ? "< select product >" : products[0].currency
        } </p>

        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
        >

          <DialogContent>
            <DialogContentText>
              <SearchProductForm onSubmit = {this.submit}/>
            </DialogContentText>
          </DialogContent>

          <Button
            color="primary"
            className="submit-btn"
            type="submit"
            onClick={_ => this.handleClose()}
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
            Cancel
          </Button>

          </Dialog>


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

export default combine(
  translate("product"),
withMobileDialog(),
withStyles(styles),
connect(mapStateToProps, { fetchAllProducts, filterProducts })
)
(ProductsPage)



