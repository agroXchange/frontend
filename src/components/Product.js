import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import '../styles/Product.css'


const product = {
  name: 'Mandarins',
  code: 40500,
  photo: "https://makemyvape.co.uk/image/cache/catalog/product/o/r/orange_mandarin_-_tfa-800x800.jpg",
  description: "Tasty fresh Mandarins from Columbia",
  volume: 1000,
  price: 3,
  currency: "USD",
  destination: "Worldwide",
  harvested: "2018-04-04",
  expiration: "2018-06-06",
  certification: "BPA"
}

const profile = {
  country: "Netherlands",
  cityPort: "Amsterdam"
}


class Product extends PureComponent {

  render() {

    return(
      <div>
        <Grid container>

          <Grid item >
            <h2>{ product.name }</h2>
            <p>Code: { product.code }</p>
            <img src={ product.photo } className="product-photo"/>
            <p>Harvested Dated: { product.harvested }</p>
            <p>Expiration Date: { product.expiration }</p>
            <Button>View Seller</Button>
          </Grid>

          <Grid item>
            <p>{ product.description }</p>
            <p>Volume: { product.volume } KG</p>
            <p>Price: { product.price } { product.currency }</p>
            <p>certification: { product.certification }</p>
            <p>Country { profile.country }</p>
            <p>City/Port: { profile.cityPort }</p>

            <Button>Edit Product</Button>
            <Button>Make An Order</Button>

          </Grid>

        </Grid>
      </div>
    )
  }

}

export default Product
