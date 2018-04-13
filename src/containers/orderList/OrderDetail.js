import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';
import OrderDetailCard from '../../components/orderList/OrderDetailCard'
import { fetchOrder, changeStatus } from '../../actions/orders'

import { connect } from 'react-redux';
import compose from "lodash/fp/compose";

import './OrderList.css'



const styles = theme => ({
 root: {
   flexGrow: 1,
 },
 paper: {
   padding: theme.spacing.unit * 2,
   textAlign: 'center',
   color: theme.palette.text.secondary,
 },
});



class OrderDetail extends PureComponent {
 static propTypes = {
 classes: PropTypes.object.isRequired
 };

 componentWillMount() {
   this.props.fetchOrder(this.props.match.params.id)
 }

 handleChangeStatus = (data ) => {
   this.props.changeStatus(data, this.props.match.params.id)
 }

 render() {
   const { classes, order } = this.props;

   return (
     <div className={classes.root}>
       <OrderDetailCard chageOrderStatus={this.handleChangeStatus} order={order}/>
     </div>
   )
 }
}


const mapStateToProps = (state) => ({
 order: state.order
})

export default compose(
 withStyles(styles),
 connect(mapStateToProps, { fetchOrder, changeStatus })
)(OrderDetail);
