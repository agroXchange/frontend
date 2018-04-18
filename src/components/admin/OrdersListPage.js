import React, { PureComponent } from "react";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { CardHeader,CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import { fetchAllOrders } from "../../actions/orders";
import { searchingByOrderName } from "./lib/lib";
import Dialog, { DialogTitle } from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "material-ui/IconButton";

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
  state = {
    users: this.props.orders,
    term: ""
  };

  componentWillMount(props) {
    this.props.fetchAllOrders();
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  renderMessage = orders => {
  return (
      <Dialog open={orders.length === 0} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          There are no orders
        </DialogTitle>
        <Link style={{textDecoration: 'none'}} to={`/admin`}>
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
      <form>
        <div
          style={{
            display: "flex",
            width: "300px",
            margin: 0,
            marginLeft: "20px",
            marginTop: "20px"
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <TextField
            label="Search Order"
            type="text"
            onChange={this.searchHandler}
          />
        </div>
      </form>
        {this.renderMessage(orders)}
        {orders.filter(searchingByOrderName(this.state.term)).map(order => (
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
                  <TableCell>{order.product.code.titleeng}</TableCell>
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
            <Button onClick={() => this.props.history.push(`/admin/orders/${order.id}`)} size="medium" color="primary">
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
