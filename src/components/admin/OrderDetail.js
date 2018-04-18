import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card from "material-ui/Card";
import { CardHeader } from "material-ui/Card";
import Button from 'material-ui/Button'
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import {  fetchOrder, changeStatus } from '../../actions/orders'
import { connect } from 'react-redux'
import compose from 'lodash/fp/compose'
import '../../styles/OrderList.css'
import { translate } from "react-i18next"
import { jwtPayload } from '../../jwt'

const style = () => ({
  card: {
    height: 700,
    width: 400,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  },
  media: {
    height: 100
  },
  table: {
    width: " 10px",
    fontSize: "10px",
    textAlign: "center"
  },
  seller: {
    textAlign: "left",
    fontSize: "5px"
  }
});

class OrderDetail extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.props.fetchOrder(this.props.match.params.id)
  }

  handleApprove = (value) => {
    const data = {
      status: 'Approved'
    }
    this.props.changeStatus(data, this.props.match.params.id)
    window.location.reload()
  }

  handleDecline = (value) => {
    const data = {
      status: 'Declined'
    }
    this.props.changeStatus(data, this.props.match.params.id)
    window.location.reload()
  }

  handleBuy = (value) => {
    const data = {
      status: 'Bought'
    }
    this.props.changeStatus(data, this.props.match.params.id)
    window.location.reload()
  }


  render() {
     const { classes, order  } = this.props;
     const { t } = this.props;
     if (!order) return null;


  return (
      <div>
         <Card className={classes.card} zDepth={3} circle={true} >
          <CardHeader avatar={"#" + order.id} />
               <Table className={classes.table}>
                <TableBody>
                <TableRow>
                   <TableCell><b>{t('Status')}</b></TableCell>
                   <TableCell><mark><b>{order.status}</b></mark></TableCell>
                </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Organization name')}</b></TableCell>
                    <TableCell>{order.buyer.name}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Field')}</b></TableCell>
                    <TableCell>{order.buyer.field}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Type')}</b></TableCell>
                    <TableCell>{order.buyer.type}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('COC')}</b></TableCell>
                    <TableCell>{order.buyer.chamberOfCommerce}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Address')}</b></TableCell>
                    <TableCell>{order.buyer.address}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Country')}</b></TableCell>
                    <TableCell>{order.buyer.country}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Phone')}</b></TableCell>
                    <TableCell>{order.buyer.phone}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Email')}</b></TableCell>
                    <TableCell>{order.buyer.email}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('ICO')}</b></TableCell>
                    <TableCell>{order.ICO}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Volume')}</b></TableCell>
                    <TableCell>{order.volume}</TableCell>
                 </TableRow>
                 <TableRow>
                    <TableCell><b>{t('Comments')}</b></TableCell>
                    <TableCell>{order.comments}</TableCell>
                 </TableRow>
                </TableBody>
              </Table>
              <br />
              <Button size="small"  color="primary" onClick={() => this.props.history.goBack()}>
               {t('GO BACK')}
              </Button>
        </Card>

      </div>
      )
   }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId,
    order: state.order,
  }
}


export default compose(
  translate('detail'),
  withStyles(style),
  connect(mapStateToProps, { fetchOrder, changeStatus })
)(OrderDetail);
