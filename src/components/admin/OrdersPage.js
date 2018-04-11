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

  render() {
    const { classes } = this.props;
    const orders = this.props.orders;

    return (
      <div>
        {orders.map(order => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader avatar={"#" + order.id} />
            <CardMedia>
              <img
                className={classes.media}
                src="https://makemyvape.co.uk/image/cache/catalog/product/o/r/orange_mandarin_-_tfa-800x800.jpg"
                alt=""
              />
            </CardMedia>
            <Card>
              <Table className={classes.seller}>
                <TableHead>
                  <TableCell>Buyer: {order.user.email}</TableCell>
                </TableHead>
              </Table>
              <Table className={classes.seller}>
                <TableHead>
                  <TableCell>Seller: {order.product.user.email}</TableCell>
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
            <Button size="medium" color="primary">
              View Order
            </Button>
          </Card>
        ))}
        <Card>
          <Link to={`/admin`}>
            <Button size="medium" color="primary">
              Admin Page
            </Button>
          </Link>
        </Card>
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
