import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Card, { CardActions, CardContent } from "material-ui/Card";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  typo: {
    maxWidth: 400,
    minWidth: 300
  },

  card: {
    maxWidth: 345,
    borderRadius: 50
  },
  media: {
    height: 200
  },
  paper: {
    height: 200
  }
});

class AdminPage extends PureComponent {
  align = {
    direction: "column",
    justify: "center",
    alignItems: "center"
  };

  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.align;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.paper}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            <Card>
              <CardContent>
                <Typography
                  className={classes.typo}
                  gutterBottom
                  variant="headline"
                  component="h2"
                >
                  View all pending request
                </Typography>
              </CardContent>
              <CardActions>
                 <Link to={`/admin/pending`}><Button size="medium" color="primary">
                  See more
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.paper}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            <Card>
              <CardContent>
                <Typography
                  className={classes.typo}
                  gutterBottom
                  variant="headline"
                  component="h2"
                >
                  User Administration
                </Typography>
              </CardContent>
              <CardActions>
              <Link to={`/admin/users`}>
                <Button size="medium" color="primary">
                  See more
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={16}
            className={classes.paper}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            <Card>
              <CardContent>
                <Typography
                  className={classes.typo}
                  gutterBottom
                  variant="headline"
                  component="h2"
                >
                  View Orders
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/admin/orders`}><Button size="medium" color="primary">
                  See more
                </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AdminPage);
