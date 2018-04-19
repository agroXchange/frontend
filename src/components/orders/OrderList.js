import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as combine from "lodash/fp/compose"
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Card from "material-ui/Card"
import { CardMedia } from "material-ui/Card"
import Button from 'material-ui/Button'
import Table, { TableHead, TableBody, TableCell, TableRow } from "material-ui/Table"
import { InputLabel } from 'material-ui/Input'
import { FormControl } from "material-ui/Form"
import { MenuItem } from "material-ui/Menu"
import Select from "material-ui/Select"
import { fetchOrdersByBuyer, fetchOrdersBySeller } from  '../../actions/orders'
import { jwtPayload } from '../../jwt'
import { translate } from 'react-i18next'

const style = theme => ({
  card: {
    height: 600,
    width: 280,
    margin: 10,
    textAlign: "center",
    display: "inline-block"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  media: {
    height: 100
  },
  table: {
    width: "10px",
    fontSize: "10px",
    textAlign: "center",
    margin: "10px"
  },
  header: {
    fontSize: "15px",
    textAlign: "left"
  }
})

class OrderList extends PureComponent {
  state = {
    status: 'All'
  }
  componentWillMount() {
    const received = this.props.location.pathname.split('/r')[1]
    return received ? this.props.fetchOrdersBySeller() : this.props.fetchOrdersByBuyer()
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value  })
  }

  renderFilteredOrder = () => {
   const {currentProfileId} = this.props
   if (this.state.status === 'Pending'||'Approved'||'Purchased'||'Declined') {
    return (
      <div>
        {this.props.orders
          .filter(order => order.status === this.state.status)
          .map(order => (
         <Card className={this.props.classes.card} zDepth={3} circle={true}>
           <CardMedia>
             <img
                className={this.props.classes.media}
                src={order.product.photo}
                alt=""
              />
           </CardMedia>
               <Table className={this.props.classes.table}>
               <TableHead className={this.props.classes.header}>Product Info</TableHead>
                <TableBody>
                   <TableRow>
                      <TableCell>{this.props.t('Product Volume')}</TableCell>
                      <TableCell>{order.product.volume}</TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t('Product Description')}</TableCell>
                      <TableCell>{order.product.description}</TableCell>
                   </TableRow>
                </TableBody>
                </Table>
                <Table className={this.props.classes.table}>
                <TableHead className={this.props.classes.header}>Order Info</TableHead>
                <TableBody>
                   <TableRow>
                      <TableCell>{this.props.t('Order Number')}</TableCell>
                      <TableCell>{order.id}</TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t('Order Volume')}</TableCell>
                      <TableCell>{order.volume}</TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t('Status')}</TableCell>
                      <TableCell>{order.status}</TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t('Ordered date')}</TableCell>
                      <TableCell>{order.date}</TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t(this.props.currentProfileId === order.seller.id ? 'Buyer name' : 'Seller name')}</TableCell>
                      <TableCell>
                      {this.currentProfileId === order.seller.id ?
                        <Link to={`/profiles/${order.buyer.id}`} >
                            {order.buyer.name}
                        </Link> :
                        <Link to={`/profiles/${order.seller.id}`}>
                            {order.seller.name}
                        </Link>}
                      </TableCell>
                   </TableRow>
                   <TableRow>
                      <TableCell>{this.props.t('Comments')}</TableCell>
                      <TableCell>{order.comments}</TableCell>
                   </TableRow>
                 </TableBody>
               </Table>
               <Link to={`/orders/${order.id}`}>
                 <Button size="small"  color="primary">
                   {this.props.t('SEE DETAILS')}
                 </Button>
               </Link>
           </Card>
         ))}
       </div>
     )}
    }

    render() {
      const { classes, t} = this.props
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
          <form>
            <div
              style={{
                width: "400px",
                margin: 0,
                marginTop: "20px"
              }}
            >
              <form
                style={{
                  width: "400px",
                  dislay: "flex",
                  marginTop: "20px"
                }}
                autoComplete="off"
              >
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="status">{t('Status')}</InputLabel>
                  <Select
                    value={this.state.status}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "status",
                      id: "status"
                    }}
                  >
                    <MenuItem value={"Pending"}>{t('Pending')}</MenuItem>
                    <MenuItem value={"Approved"}>{t('Approved')}</MenuItem>
                    <MenuItem value={"Declined"}>{t('Declined')}</MenuItem>
                    <MenuItem value={"Purchased"}>{t('Purchased')}</MenuItem>
                    <MenuItem value={"All"}>{t('All')}</MenuItem>
                  </Select>
                </FormControl>
              </form>
            </div>
          </form>
          {this.renderFilteredOrder()}
          { this.state.status === "All" &&
          <div>
            {this.props.orders.map(order => (
             <Card className={this.props.classes.card} zDepth={3} circle={true}>
               <CardMedia>
                 <img
                    className={this.props.classes.media}
                    src={order.product.photo}
                    alt=""
                  />
               </CardMedia>
                   <Table className={this.props.classes.table}>
                    <TableHead className={this.props.classes.header}>Product Info</TableHead>
                    <TableBody>
                       <TableRow>
                          <TableCell>{this.props.t('Product Volume')}</TableCell>
                          <TableCell>{order.product.volume}</TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t('Product Description')}</TableCell>
                          <TableCell>{order.product.description}</TableCell>
                       </TableRow>
                    </TableBody>
                    </Table>
                   <Table className={this.props.classes.table}>
                   <TableHead className={this.props.classes.header}>Order Info</TableHead>
                    <TableBody>
                       <TableRow>
                         <TableCell>{this.props.t('Order Number')}</TableCell>
                         <TableCell>{order.id}</TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t('Order Volume')}</TableCell>
                          <TableCell>{order.volume}</TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t('Status')}</TableCell>
                          <TableCell>{order.status}</TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t('Ordered Date')}</TableCell>
                          <TableCell>{order.date}</TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t(this.props.currentProfileId === order.seller.id ? 'Buyer name' : 'Seller name')}</TableCell>
                          <TableCell>
                          {this.currentProfileId === order.seller.id ?
                            <Link to={`/profiles/${order.buyer.id}`} >
                                {order.buyer.name}
                            </Link> :
                            <Link to={`/profiles/${order.seller.id}`}>
                                {order.seller.name}
                            </Link>}
                          </TableCell>
                       </TableRow>
                       <TableRow>
                          <TableCell>{this.props.t('Comments')}</TableCell>
                          <TableCell>{order.comments}</TableCell>
                       </TableRow>
                     </TableBody>
                   </Table>
                   <Link to={`/orders/${order.id}`}>
                     <Button size="small"  color="primary">
                       {this.props.t('SEE DETAILS')}
                     </Button>
                   </Link>
               </Card>
             ))}
           </div>}
         </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    currentUser: state.currentUser,
    currentUserRole: jwtDecoded.role,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId,
    orders: state.orders,
  }
}
export default combine(
  translate('orders'),
  connect(mapStateToProps, { fetchOrdersByBuyer, fetchOrdersBySeller }),
  withStyles(style)
)(OrderList)
