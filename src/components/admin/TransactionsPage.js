import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
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

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = theme => ({
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
    fontSize: "10px"
  },
  seller: {
    textAlign: "center",
    fontSize: "20px"
  }

});

const array = [0, 1, 2, 3, 4, 5];

class PendingPage extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider>
        {array.map(item => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader avatar="Order #123" />
            <CardMedia>
              <img
                className={classes.media}
                src="https://makemyvape.co.uk/image/cache/catalog/product/o/r/orange_mandarin_-_tfa-800x800.jpg"
                alt=""
              />
            </CardMedia>
            <Card >
            <Table >
                <TableRow className={classes.table}>
                  <TableCell>Buyer: Carlos</TableCell>
                  <TableCell>Seller: Luca</TableCell>
                </TableRow>
              </Table>
            </Card>
            <br/>
            <Table className={classes.table}>
              <TableBody>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Mandarinas</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date Order</TableCell>
                  <TableCell>10/04/2018</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>50$</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Volume</TableCell>
                  <TableCell>40kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Comments</TableCell>
                  <TableCell>Something...</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Status</TableCell>
                  <TableCell>Pending</TableCell>
                </TableRow>

              </TableBody>
            </Table>
            <Button size="medium" color="primary">
              View Order
            </Button>
          </Card>
        ))}
      </MuiThemeProvider>
    );
  }
}

export default withStyles(style)(PendingPage);
