import React, { PureComponent } from "react";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import {
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardContent
} from "material-ui/Card";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import { fetchAllOrders } from "../../actions/orders";
import Dialog, { DialogActions, DialogContent, DialogContentText,  DialogTitle} from "material-ui/Dialog";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = () => ({
  card: {
    height: 550,
    width: 300,
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

class OrdersPage extends PureComponent {
  componentWillMount(props) {
    this.props.fetchAllOrders();
  }

  renderMessage = orders => {
  return (
      <Dialog open={orders.length === 0} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          There are no orders
        </DialogTitle>
        <Link to={`/admin`}>
          <Button size="medium" color="primary">
            Admin Page
          </Button>
        </Link>
      </Dialog>
    );
  };



  render() {
    const { classes } = this.props;
    const orders = this.props.orders;

    return (
      <div>
        {this.renderMessage(orders)}
        {orders.map(order => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader avatar={"#" + order.id} />
            <CardMedia>
              <img
                className={classes.media}
                src={order.product.photo}
                alt=""
              />
            </CardMedia>
            <Card>
              <Table className={classes.seller}>
                <TableHead>
                  <TableCell>Buyer: {order.buyer.name}</TableCell>
                </TableHead>
              </Table>
              <Table className={classes.seller}>
                <TableHead>
                  <TableCell>Seller: {order.product.seller.name}</TableCell>
                </TableHead>
              </Table>
            </Card>
            <br />
            <Table className={classes.table}>
              <TableBody>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>{order.product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date Order</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>
                    {order.product.price}
                    {order.product.currency}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Volume</TableCell>
                  <TableCell>{order.volume}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Comments</TableCell>
                  <TableCell>{order.comments}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button onClick={() => this.props.history.push(`/orders/${order.id}`)} size="medium" color="primary">
              View Order
            </Button>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    orders: state.orders
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps, { fetchAllOrders })
)(OrdersPage);
