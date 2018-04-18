import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
// specific for translation
import * as combine from "lodash/fp/compose";
import {translate} from "react-i18next"

const profile = {
  country: "Netherlands",
  cityPort: "Amsterdam"
}


class ExampleTranslation extends PureComponent {

  render() {
    const { t } = this.props

    const { product } = this.props
    return(
      <div>
        <Grid container>

        {/* {t('')} this is the frame*/}
        {/* {t('City/Port')} 'City/Port' is the key. Add it to your category in i18n.js File */}

          <Grid item >
            <h2>{ product.name }</h2>
            <p>{t('Code')}: { product.code }</p>
            <img src={ product.photo } className="product-photo" alt="product" />
            <p>{t('Harvested Dated')}: { product.harvested }</p>
            <p>{t('Expiration Date')}: { product.expiration }</p>
            <Button color="primary">{t('View Seller')}</Button>
          </Grid>

          <Grid item>
            <p>{ product.description }</p>
            <p>{t('Volume')}: { product.volume } KG</p>
            <p>{t('Price')}: { product.price } { product.currency } per KG</p>
            <p>{t('Certification')}: { product.certification }</p>
            <p>{t('Country')} { profile.country }</p>
            <p>{t('City/Port')}: { profile.cityPort }</p>

            <Button color="primary">{t('Edit Product')}</Button>{/*Don't forget buttonlabels! */}
            <Button color="primary">{t('Make An Order')}</Button>


            <p>{t('new')}: { profile.cityPort }</p>
          </Grid>

        </Grid>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    product: state.product
  }
}

export default combine(
  translate('product'),
  translate('profile'),
  connect(mapStateToProps)
)(ExampleTranslation);
