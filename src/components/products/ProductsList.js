import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import * as combine from "lodash/fp/compose";
import {translate, Trans} from 'react-i18next'
import { fetchAllProducts } from '../../actions/products'
import '../../styles/Product.css'


const stockImage = "https://theculinarycook.com/wp-content/uploads/2012/04/vegetable-stock-679x509.jpg"

const styles = {
  card: {
    maxWidth: 400,
    minWidth: 300,
    maxHeight: 350,
    margin: 20,
    textAlign: "left",
    display: "inline-block"
  },
  table: {
    width: "10px",
    fontSize: "10px"
  },
  number: {
    fontSize: "10px"
  },
  media: {
    height: 100,
  },
  status: {
    height: 50,
    marginBottom: -10,
    marginTop: -10,
  }
}

class ProductList extends PureComponent {
  static propTypes = {
  classes: PropTypes.object.isRequired
  };

  daysRemaining = (harvested, expiration) => {
    const today = new Date()
    const end = new Date(expiration)
    const diffDays = parseInt((end - today) / (1000 * 60 * 60 * 24));
    if(diffDays < 0) {
      return 0
    } else {
      return diffDays
    }
  }

  render() {
    const { classes, products } = this.props;

    const { t } = this.props

    if(!products) return null
      return (
        <div>
          { products[0] && products[0].code && products.map(product =>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={ product.photo !== null ?
                  product.photo : stockImage }
                title="product name - redux"
              />

             <CardContent>
<<<<<<< 40901fc3f6f05156e19ae9776ffc5185af0b62e1
               <p className={classes.number}>
                 <h2> { product.name }</h2>
               </p>
=======
              <div className={ classes.status }>
               { product.volume === 0 ? <h3 className="sold-out-img">SOLD OUT</h3> : "" }

               { this.daysRemaining(product.harvested, product.expiration) === 0 ?
                 <h3 className="expired-img">EXPIRED</h3> : "" }
              </div>
>>>>>>> Styled Product status message
                 <table>

                   <tr className={classes.table}>
                      <th>{t('Product')}</th>
                      <td>{product.code.titleeng}</td>
                   </tr>

                   <tr className={classes.table}>
                      <th>{t('Volume')}</th>
                      <td>{product.volume} KG</td>
                   </tr>

                   <tr className={classes.table}>
                      <th>{t('Price')}</th>
                      <td>{product.price} {product.currency} per KG</td>
                   </tr>

                   <tr className={classes.table}>
                      <th>{t('Expiry Date')}</th>
                      <td> {product.expiration}</td>
                   </tr>


                 </table>

             </CardContent>
             <CardActions>

              <Link style={{textDecoration: 'none'}} to={ `/products/${product.id}` }>
               <Button size="small" color="primary">
                 {t('View Product')}
               </Button>
               </Link>
             </CardActions>
           </Card>
           )}
         </div>
      )
    }
}

export default combine(
  translate('orders'),
  withStyles(styles),
)(ProductList);
