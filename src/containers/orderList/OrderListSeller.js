import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';
import OrderCard from '../components/OrderCard'
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



class OrderListSeller extends PureComponent {
  static propTypes = {
  classes: PropTypes.object.isRequired
  };



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <OrderCard />
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <div className="orderNumber">order #1300</div>
          <img src="https://imagizer.imageshack.com/v2/280x200q90/922/a6Pawe.jpg" />
          <div className="expirationDate">expiration date: 2018-04-10</div>

         <p>Go to seller profile</p>
          <table>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
              <tr>
                <td width="30%">mandarine</td>
                <td width="30%">tasty and fresh mandarine</td>
                <td width="30%">15Euro</td>
              </tr>
          </table>
          <table>
            <th>Volume</th>
            <th>Comments</th>
            <th>Status</th>
            <th>Ordered date</th>
              <tr>
                <td width="30%">1000 KG</td>
                <td width="30%">quick delievery</td>
                <td width="30%">Pending</td>
                <td width="30%">2018-04-07</td>
              </tr>
          </table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(OrderListBuyer);
