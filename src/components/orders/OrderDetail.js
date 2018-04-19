import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card from "material-ui/Card"
import Button from 'material-ui/Button'
import { CardHeader, CardMedia } from "material-ui/Card"
import {Link} from 'react-router-dom'
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"
import {  fetchOrder, changeStatus } from '../../actions/orders'
import { connect } from 'react-redux'
import * as combine from "lodash/fp/compose"
import '../../styles/OrderList.css'
import { translate } from "react-i18next"
import { jwtPayload } from '../../jwt'


const style = () => ({
  card: {
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  },
  media: {
    height: 200
  },
  table: {
    width: 50,
    fontSize: "10px",
    textAlign: "center",
  }
})

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
  }

  handleDecline = (value) => {
    const data = {
      status: 'Declined'
    }
    this.props.changeStatus(data, this.props.match.params.id)
  }

  handleBuy = (value) => {
    const data = {
      status: 'Purchased'
    }
    this.props.changeStatus(data, this.props.match.params.id)
  }

  currentUser = (currentUser, order) => {
    if (currentUser === order.product.seller.id && order.status === "Pending") {
       return (
         <div>
         <Button
            variant="raised"
            color="primary"
            className={this.props.classes.button}
            onClick={this.handleApprove}
            >
         {this.props.t('ACCEPT')}
        </Button>
        <Button
            variant="raised"
            color="primary"
            className={this.props.classes.button}
            onClick={this.handleDecline}
            >
         {this.props.t('DECLINE')}
        </Button>
        </div>
      )
  } else if (currentUser === order.product.seller.id && order.status === "Approved") {
      return (
        <div>
         <Button
             variant="raised"
             color="primary"
             className={this.props.classes.button}
             onClick={this.handleDecline}
             >
          {this.props.t('DECLINE')}
       </Button>
       </div>
     )
  }
   else if (currentUser === order.buyer.id && order.status === "Approved") {
     return (
       <div>
       <br/>
       <Button
          variant="raised"
          color="primary"
          className={this.props.classes.button}
          onClick={this.handleBuy}
          >
       {this.props.t('PURCHASE')}
      </Button>
      </div>
     )
  }
}

  render() {
     const { classes, order  } = this.props
     const { t } = this.props
     if (!order) return null


  return (
      <div>
        <Button
          onClick={() => this.props.history.goBack()}
          size="medium"
          color="primary"
          style={{display:'flex', flex:1}}
        >
          Go Back
        </Button>

         <Card className={classes.card} zDepth={3} circle={true} >
               <Table className={classes.table}>
                <TableBody>
                <TableRow>
                   <TableCell><b>{t('Number')}</b></TableCell>
                   <TableCell>{order.id}</TableCell>
                </TableRow>
                <TableRow>
                   <TableCell><b>{t('Status')}</b></TableCell>
                   <TableCell><mark className={order.status}><b>{order.status}</b></mark></TableCell>
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
              {this.props.currentUserRole !== 'admin' &&(
                 this.currentUser(this.props.currentProfileId, order)
               )}


                <Link to={`orders/${order.id}/chat`}>
                  <br />
                  <Button
                     variant="raised"
                     color="primary"
                     className={this.props.classes.button}
                     onClick={this.handleBuy}
                     >
                   NEGOTIATION ROOM
                 </Button>
               </Link>
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
    currentUserRole: jwtDecoded.role,
    currentProfileId: jwtDecoded.profileId,
    order: state.order,
  }
}


export default combine(
  translate('detail'),
  withStyles(style),
  connect(mapStateToProps, { fetchOrder, changeStatus })
)(OrderDetail)
