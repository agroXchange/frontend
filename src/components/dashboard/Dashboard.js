import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { fetchMyProducts } from '../../actions/products'
import { fetchUser } from '../../actions/users'
import { withStyles } from "material-ui/styles"
import { Link , Redirect} from "react-router-dom"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"
import Card, { CardActions, CardContent } from "material-ui/Card"
import Paper from "material-ui/Paper"
import {fetchUnseenOrders} from '../../actions/orders'
import {jwtPayload} from '../../jwt'
import compose from "lodash/fp/compose"
import { translate } from "react-i18next"

const styles = theme => ({
  card: {
    maxWidth: 345,
    minWidth: 240,
    margin: 20,
    textAlign: "center",
    alignItem: "center"
  },
  media: {
    height: 200
  },
  paper: {
    height: 200,
    minWidth: 400
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
})

class Dashboard extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchMyProducts(this.props.currentProfileId)
    this.props.fetchUser(this.props.currentProfileId)
    this.props.fetchUnseenOrders()
  }

  handleShowAll = () => {
    this.setState({
      showAll: true
    })
  }


  render() {
    const { classes, currentProfileId, currentUser, orders, t, user } = this.props
    if (!currentUser) return <Redirect to="/" />
    if (this.props.currentUserRole === "admin") return <Redirect to="/admin" />;


    return (
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block",
          marginTop: "40px"
        }}
      >
        <h1>{t("Welcome")} {user.name}</h1>
          <Button className={classes.button} size="medium" color="primary" variant="raised" component={Link} to={`/products`}>
            {t("goToMarketplace")}
          </Button>
        {console.log('role  ' + this.props.jwtPayload)}
        {
          orders[0] &&
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {t("newOrdersReceived")}
              </Typography>
              {
                !this.state.showAll &&
                orders.slice(0,3).map(o => {
                  const {product, buyer} = o
                  return (
                    <Link to={`/orders/${o.id}`} ><Typography>{o.volume}kg of {product.code.titleeng} from {buyer.name}</Typography></Link>
                  )
                })
              }
              {
                this.state.showAll &&
                orders.map(o => {
                  const {product, buyer} = o
                  return (
                    <Link to={`/orders/${o.id}`} ><Typography>{o.volume}kg of {product.code.titleeng} from {buyer.name}</Typography></Link>
                  )
                })
              }
              {
                orders.length > 3 &&
                !this.state.showAll &&
                <Button onClick={this.handleShowAll} >Show all</Button>
              }
            </CardContent>
          </Card>
        }
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {t("myProfile")}
            </Typography>
            <div className="photo">
              {user.logo === "null" ? (
                <img src={"/images/profile.png"} alt={"default"} width="150" />
              ) : (
                <img src={user.logo} alt={"profilepicture"} width="150" />
              )}
            </div>
          </CardContent>
          <CardActions className={classes.cardContent}>
            <Button className={classes.button} size="medium" color="primary" variant="raised" component={Link} to={`/profiles/${currentProfileId}`}>
              {t("seeYourProfileInformation")}
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            {t("myProducts")}
            </Typography>
            <Typography color="textSecondary">
              {t("yourCurrentlyHave")}{this.props.products.length} {t("productsOnOffer")}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} size="medium" color="primary" variant="raised" component={Link} to={`/products/new`}>
              {t("addNewProduct")}
            </Button>
            <Button className={classes.button} size="medium" color="primary" variant="raised" component={Link} to={`/profiles/${currentProfileId}/products`}>
              {t("seeAllMyProducts")}
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {t("myOrders")}
            </Typography>
            <Typography color="textSecondary">
              {t("yourCurrentlyHave")}{this.props.orders.length} {t("orders")}
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{textDecoration: 'none'}}  to={`/orders`}>
              <Button className={classes.button} size="medium" color="primary" variant="raised" onClick={ this.x }>
                {t("viewAllOrders")}
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to={`/orders/received`}>
              <Button size="medium" color="primary" variant="raised" >
                {t("viewAllReceivedOrders")}
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    currentUser: state.currentUser,
    currentUserRole: jwtDecoded.role,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId,
    orders: state.orders,
    products: state.products,
    user: state.user
  }
}


export default compose(
  translate("user"),
  withStyles(styles),
  connect(mapStateToProps, { fetchMyProducts, fetchUser, fetchUnseenOrders })
)(Dashboard)
