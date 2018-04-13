import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
// specific for translation
import compose from 'lodash/fp/compose'
import {translate} from "react-i18next"
{/* specific for translation */}

const profile = {
  country: "Netherlands",
  cityPort: "Amsterdam"
}


class ExampleTranslation extends PureComponent {

  render() {

    {/* specific for translation */}
    const { t } = this.props
    {/* specific for translation */}

    const { product } = this.props
    return(
      <div>
        <Grid container>

        {/* {t('')} this is the frame*/}
        {/* {t('City/Port')} 'City/Port' is the key. Add it to your category in i18n.js File */}

          <Grid item >
            <h2>{ product.name }</h2>
            <p>{t('Code')}: { product.code }</p>
            <img src={ product.photo } className="product-photo"/>
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

            <Button>{t('Edit Product')}</Button>{/*Don't forget buttonlabels! */}
            <Button>{t('Make An Order')}</Button>


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

{/* for the export use default compose() and add the translate('') function BEFORE the MapStatesToPorps */}
{/* the 'produt is a name for the category in the i18n.js file. Choose wisely!' */}
export default compose(
  translate('product'),
  translate('profile'),
  connect(mapStateToProps)
)(ExampleTranslation);
