import React, { PureComponent } from "react";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { CardHeader, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination
} from "material-ui/Table";
import { fetchAllProducts } from "../../actions/products";
import { productsFilter, changeInputType } from "./lib/lib";
import Dialog, { DialogTitle } from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "material-ui/IconButton";
import Select from "material-ui/Select";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import { MenuItem } from "material-ui/Menu";
import Paper from "material-ui/Paper";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

const style = theme => ({
  card: {
    height: 500,
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
    fontSize: "14px",
    textAlign: "center"
  },
  seller: {
    textAlign: "left",
    fontSize: "5px"
  },
  root: {
    width: "600px",
    marginTop: theme.spacing.unit * 3
  },
  table2: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);



class OrdersPage extends PureComponent {
  state = {
    users: this.props.orders,
    term: "",
    value: "name",
    showOrder: false,
    page: 0,
    rowsPerPage: 5
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleOrderClose = id => {
    this.setState({ [`showOrder${id}`]: false });
  };

  handleOrderOpen = id => {
    this.setState({ [`showOrder${id}`]: true });
  };

  componentWillMount(props) {
    this.props.fetchAllProducts();
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  renderMessage = products => {
    return (
      <Dialog open={products.length === 0} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">There are no products</DialogTitle>
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
    const products = this.props.products;
    if (!products) return null


    const { rowsPerPage, page } = this.state;
    const counter = 0;
    const emptyRows =
      rowsPerPage -
      Math.min(
        rowsPerPage,
        products.map(product => {
          return product.orders;
        }).length -
          page * rowsPerPage
      );

    return (
      <div>
        <form>
          <div
            style={{
              width: "400px",
              margin: 0,

              marginTop: "20px"
            }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField
              type={changeInputType(this.state.value)}
              onChange={this.searchHandler}
            />
            <form
              style={{
                width: "400px",
                dislay: "flex",

                marginTop: "20px"
              }}
              autoComplete="off"
            >
              <FormControl>
                <Select
                  value={this.state.value}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "name",
                    id: "age-simple"
                  }}
                >
                  <MenuItem value={"name"}>Product Name</MenuItem>
                  <MenuItem value={"country"}>Country</MenuItem>
                  <MenuItem value={"seller"}>Seller</MenuItem>
                  <MenuItem value={"expiration"}>Expiration Date</MenuItem>
                </Select>
              </FormControl>
            </form>
          </div>
        </form>
        {this.renderMessage(products)}
        {products
          .filter(productsFilter(this.state.value, this.state.term))
          .map(product => (
            <Card className={classes.card} zDepth={3} circle={true}>
              <CardHeader avatar={"#" + product.id} />
              <CardMedia>
                <img className={classes.media} src={product.photo} alt="" />
              </CardMedia>
              <Card>
                <Table className={classes.seller}>
                  <TableHead>
                    <TableCell>Seller: {product.seller.name}</TableCell>
                  </TableHead>
                </Table>
              </Card>
              <br />
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>{product.code.titleeng}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>{product.seller.country}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Price</TableCell>
                    <TableCell>
                      {product.price}
                      {product.currency}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Volume</TableCell>
                    <TableCell>{product.volume}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Expiration Date</TableCell>
                    <TableCell>{product.expiration}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                onClick={_ => this.handleOrderOpen(product.id)}
                size="medium"
                color="primary"
              >
                View Orders
              </Button>
              <Button
                onClick={() =>
                  this.props.history.push(`/products/${product.id}`)
                }
                size="medium"
                color="primary"
              >
                View Product info
              </Button>
              <Dialog
                open={this.state[`showOrder${product.id}`]}
                onClose={_ => this.handleOrderClose(product.id)}
                aria-labelledby="form-dialog-title"
              >
                {" "}
                <Paper className={classes.root}>
                  <div className={classes.tableWrapper}>
                    <Table className={classes.table2}>
                      <TableHead>
                        <TableRow>
                          <CustomTableCell numeric>Order Id</CustomTableCell>
                          <CustomTableCell numeric>Date</CustomTableCell>
                          <CustomTableCell numeric>Order status</CustomTableCell>
                          <CustomTableCell numeric>Order Comments</CustomTableCell>
                          <CustomTableCell numeric>Buyer Name</CustomTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.orders && product.orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(order => (
                          <TableRow
                            className={this.props.classes.row}
                            key={order.id}
                          >
                            <CustomTableCell><Link to={`/orders/${order.id}`}>{order.id}</Link></CustomTableCell>
                            <CustomTableCell>{order.date}</CustomTableCell>
                            <CustomTableCell>{order.status}</CustomTableCell>
                            <CustomTableCell>{order.comments}</CustomTableCell>
                            <CustomTableCell><Link to={`/admin/profiles/${order.buyer.id}`}>{order.buyer.name}</Link></CustomTableCell>
                          </TableRow>
                        ))}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 48 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </TableBody>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            colSpan={3}
                            count={product.orders && product.orders.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            Actions={TablePaginationActionsWrapped}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </div>
                </Paper>
              </Dialog>
            </Card>
          ))}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    products: state.products
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps, { fetchAllProducts })
)(OrdersPage);
