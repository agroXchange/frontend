import React, { PureComponent } from "react"
import { withStyles } from "material-ui/styles"
import { Link, Redirect } from "react-router-dom"
import Button from "material-ui/Button"
import Grid from "material-ui/Grid"
import Typography from "material-ui/Typography"
import Card, { CardActions, CardContent } from "material-ui/Card"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes"
import BuildIcon from "@material-ui/icons/Build"
import Paper from "material-ui/Paper"
import DescriptionIndIcon from "@material-ui/icons/Description"
import {fetchDashboard} from '../../actions/dashboard'
import {jwtPayload} from '../../jwt'
import { connect } from "react-redux"
import * as combine from "lodash/fp/compose"
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table"

export const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:"20px"
  },
  typo: {
    maxWidth: 400,
    minWidth: 300,


  },

  card: {
    maxWidth: 345,
    borderRadius: 50
  },
  media: {
    height: 200
  },
  paper: {
    height: 200,
    marginTop: '20px'
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
  },
  table: {
    fontSize: "5px"
  }
})

class AdminPage extends PureComponent {
  align = {
    direction: "column",
    justify: "center",
    alignItems: "center"
  }

  componentWillMount = () => {
    this.props.fetchDashboard()
  }

  render() {
    const { classes } = this.props
    const { alignItems, direction, justify } = this.align
    if (this.props.currentUserRole !== "admin") return <Redirect to="/error" />

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
            <Card >
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
                <Typography style={{fontSize:'14px'}} >
                 You have {this.props.pendingUser} pending request
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
                  <Typography style={{fontSize:'14px'}} >
                   There are {this.props.users} users in the system
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
                  <DescriptionIndIcon />
                  <br />
                  View All Products
                </Typography>
                <Typography style={{fontSize:'14px'}} >
                  There are {this.props.products} products in the system
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
                  <Typography style={{fontSize:'14px'}} >
                   There are {this.props.orders} orders in the system
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
      </Grid>
    )
  }
}
const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    currentUserRole: jwtDecoded.role,
    pendingUser : state.dashboard.pendingUsers,
    dashboard : state.dashboard,
    users: state.dashboard.users,
    products: state.dashboard.products,
    orders: state.dashboard.orders,
    approvedOrders :state.dashboard.approvedOrders,
    declineOrders :state.dashboard.declineOrders,
    pendingOrders :state.dashboard.pendingOrders,
    purchaseOrders :state.dashboard.purchaseOrders,

  }
}

export default combine(
  withStyles(styles),
  connect(mapStateToProps, {fetchDashboard})
)(AdminPage)
