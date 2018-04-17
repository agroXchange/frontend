import React, { PureComponent } from "react";
import { connect } from "react-redux";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { CardHeader,CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import { fetchAllProducts } from "../../actions/products";
import { productsFilter, changeInputType } from "./lib/lib";
import Dialog, { DialogTitle } from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "material-ui/IconButton";
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';



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
    term: "",
    value: "name",
  };

  componentWillMount(props) {
    this.props.fetchAllProducts();
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });

  }

  renderMessage = products => {
  return (
      <Dialog open={products.length === 0} aria-labelledby="form-dialog-title">
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
    const products = this.props.products;

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
    <form style={{

      width: "400px",
      dislay: "flex",

      marginTop: "20px"
    }} autoComplete="off">
    <FormControl >
      <Select
        value={this.state.value}
        onChange={this.handleChange}
        inputProps={{
          name: 'name',
          id: 'age-simple',
        }}
      >
        <MenuItem value={'name'}>Product Name</MenuItem>
        <MenuItem value={'country'}>Country</MenuItem>
        <MenuItem value={'seller'}>Seller</MenuItem>
        <MenuItem value={'expiration'}>Expiration Date</MenuItem>
      </Select>
    </FormControl>
    </form>
        </div>
      </form>
        {this.renderMessage(products)}
        {products.filter(productsFilter(this.state.value,this.state.term)).map(product => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader avatar={"#" + product.id} />
            <CardMedia>
              <img
                className={classes.media}
                src={product.photo}
                alt=""
              />
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
            <Button onClick={() => this.props.history.push(`/products/${product.id}`)} size="medium" color="primary">
              View Product info
            </Button>
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
