import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid';
import Orders from '../../components/orderList/OrderCardSeller'
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
        <Orders />
      </div>
    )
  }
}

export default withStyles(styles)(OrderListSeller);
