import React, { PureComponent } from 'react'
<<<<<<< 68535833ba676399be74479ca9b1f59a62022be1
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import compose from 'lodash/fp/compose'
import { translate } from "react-i18next"

=======
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import compose from 'lodash/fp/compose'
import {translate, Trans} from "react-i18next"
>>>>>>> Fixed bugs in accept and decline by orders/id
const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: 50,
    textAlign: "left",
    display: "inline-block"
  },
  table: {
    width: "15px",
    fontSize: "12px"
  },
  number: {
    fontSize: "15px"
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class OrderDetailCard extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  handleApprove = () => {
    const data = {
      status: 'Approved'
    }
    this.props.chageOrderStatus(data)
    window.location.reload()
  }
  handleDecline = () => {
    const data = {
      status: 'Declined'
    }
    this.props.chageOrderStatus(data)
    window.location.reload()
  }

  render() {
    const { classes, order, product } = this.props
    const { t } = this.props

    return (
      <div>
      {order.map( order =>
         <Card className={classes.card}>
           <CardContent>
             <Typography gutterBottom
                variant="headline"
                component="p"
                className={classes.number}
              >
               {t('Order')} #{order.id}
             </Typography>
               <table className={classes.table}>
                 <tr>
                    <th>{t('Organization name')}</th>
                    <td>{order.buyer.name}</td>
                 </tr>
                 <tr>
                    <th>{t('Field')}</th>
                    <td>{order.buyer.field}</td>
                 </tr>
                 <tr>
                    <th>{t('Type')}</th>
                    <td>{order.buyer.type}</td>
                 </tr>
                 <tr>
                    <th>{t('COC')}</th>
                    <td>{order.buyer.chamberOfCommerce}</td>
                 </tr>
                 <tr>
                    <th>{t('Address')}</th>
                    <td>{order.buyer.address}</td>
                 </tr>
                 <tr>
                    <th>{t('Country')}</th>
                    <td>{order.buyer.country}</td>
                 </tr>
                 <tr>
                    <th>{t('Phone')}</th>
                    <td>{order.buyer.phone}</td>
                 </tr>
                 <tr>
                    <th>{t('email')}</th>
                    <td>{order.buyer.email}</td>
                 </tr>
                 <tr>
                    <th>{t('ICO')}</th>
                    <td>{order.ICO}</td>
                 </tr>
                 <tr>
                    <th>{t('volume')}</th>
                    <td>{order.volume}</td>
                 </tr>
                 <tr>
                    <th>{t('Comments')}</th>
                    <td>{order.comments}</td>
                 </tr>
                 <tr>
                    <th>{t('Status')}</th>
                    <td>{order.status}</td>
                 </tr>
               </table>
           </CardContent>
           <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={this.handleApprove}
              >
           {t('ACCEPT')}
          </Button>
          <Button
              variant="raised"
              color="primary"
              className={classes.button}
              onClick={this.handleDecline}
              >
           {t('DECLINE')}
          </Button>
         </Card>
         )}
       </div>
    )
  }
}
export default compose(
  translate('detail'),
  withStyles(styles))(OrderDetailCard);
