import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Card, { CardActions, CardContent } from "material-ui/Card";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import BuildIcon from "@material-ui/icons/Build";
import DescriptionIndIcon from "@material-ui/icons/Description";

export const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:"20px"
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
  },
  button : {
     margin: theme.spacing.unit,
     backgroundColor: `#588D61`,
     color: "white",
     display:'inline-block',
     textAlign:'center',
     '&:hover': {
        backgroundColor: `#8FBC8F`,
      },
  },
  cardContent : {
    display:'inline-block',
    alignItem: 'center'
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
              <CardContent >
                <Typography
                  className={classes.typo}
                  gutterBottom
                  variant="headline"
                  component="h2"
                >
                <AssignmentIndIcon />
                <br />
                  View all pending request
                </Typography>
              </CardContent>
              <CardActions className={classes.cardContent}>
                 <Link style={{textDecoration: 'none'}} to={`/admin/pending`}>
                 <Button className={classes.button} size="medium" color="primary">
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
                <BuildIcon />
                <br />
                  User Administration
                </Typography>
              </CardContent>
              <CardActions className={classes.cardContent}>
              <Link style={{textDecoration: 'none'}} to={`/admin/users`}>
                <Button className={classes.button} size="medium" color="primary">
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
                  <SpeakerNotesIcon />
                  <br />
                  View All Orders
                </Typography>
              </CardContent>
              <CardActions className={classes.cardContent}>
                <Link style={{textDecoration: 'none'}} to={`/admin/orders`}>
                <Button className={classes.button} size="medium" color="primary">
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
                  <DescriptionIndIcon />
                  <br />
                  View All Products
                </Typography>
              </CardContent>
              <CardActions className={classes.cardContent}>
                <Link style={{textDecoration: 'none'}} to={`/admin/products`}>
                <Button className={classes.button} size="medium" color="primary">
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
