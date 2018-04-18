import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import * as combine from "lodash/fp/compose";
import {translate } from 'react-i18next'

const stockImage = "https://theculinarycook.com/wp-content/uploads/2012/04/vegetable-stock-679x509.jpg"

const styles = {
  card: {
    maxWidth: 400,
    minWidth: 300,
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
<<<<<<< HEAD

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
               <p className={classes.number}>
                 <h2> { product.name }</h2>
               </p>
=======
    const { t, i18n } = this.props

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

               { product.volume === 0 ? <h3>SOLD OUT</h3> : "" }
               { this.daysRemaining(product.harvested, product.expiration) === 0 ? <h3>EXPIRED</h3> : "" }
>>>>>>> 5a907a88972b9a50cf5f3484572f3ef607d0bfff

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
<<<<<<< HEAD
         )}
       </div>
    )
  }
=======
           )}
         </div>
      )
    }
>>>>>>> 5a907a88972b9a50cf5f3484572f3ef607d0bfff
}

export default combine(
  translate('orders'),
  withStyles(styles),
)(ProductList);
