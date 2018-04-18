import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Translate from '@material-ui/icons/Translate'
import {Link} from 'react-router-dom'
import SwipeableDrawer from 'material-ui/SwipeableDrawer'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import {ListItem, ListItemIcon} from 'material-ui/List';
import {jwtPayload} from "../jwt"
import compose from "redux/src/compose"
import {translate} from "react-i18next"
import {connect} from "react-redux"
import {withStyles} from "material-ui"
import Button from "material-ui/Button";


const styles = {
  list: {
    width: 250
  },
  flex: {
    flex: 1
  },
  fullList: {
    width: 'auto'
  },
  root: {
   flexGrow: 1,
 },
 menuButton: {
   marginLeft: -12,
   marginRight: 20,
 },
}

class NavBar extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  state = {
    auth: true,
    anchorEl: null,
    left: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  }

  handleChange = (event, checked) => {
    this.setState({auth: checked});
  }

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleNewMenu = event => {
    this.setState({El: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null});
  }

  handleNewClose = () => {
    this.setState({El: null});
  }

  adminMenu = (user) => {
    if (user === "admin") {
      return (
        <div>
        <ListItem button="button">
          <ListItemIcon>
            <StarIcon/>
          </ListItemIcon>
          <Link to='/admin'>Admin Page</Link>
        </ListItem>
        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to={`/admin/pending`}>Pending User</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to={`/admin/users`}>User Administration</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/admin/orders'>View All Order</Link>
        </ListItem>
        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/admin/products'>View All Products</Link>
        </ListItem>
        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/logout'>Logout</Link>
        </ListItem>
        </div>
      )}
  }

  render() {
    const {classes, currentUser, currentProfileId, currentProfileRole} = this.props;
    const {auth, anchorEl, El} = this.state;
    const open = Boolean(anchorEl);
    const openNew = Boolean(El);

    const {i18n} = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }

    const sideList = ( <div className={classes.list}>

      <div>
      {this.adminMenu(currentProfileRole)}
      { currentProfileRole !== "admin" &&
        <div className={classes.root}>
        <ListItem button="button">
          <ListItemIcon>
            <StarIcon/>
          </ListItemIcon>
          <Link to='/dashboard'>Dashboard</Link>
        </ListItem>
        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to={`/profiles/${currentProfileId}`}>My profile</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to={`/profiles/${currentProfileId}/products`}>My products</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/orders'>My orders</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/products'>Marketplace</Link>
        </ListItem>



        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/logout'>Logout</Link>
        </ListItem>
        </div>
      }
      </div>
    </div>)


    return (<div>

      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar>
      <div>
          {currentUser &&      <IconButton  float="left" style={{color:`#588D61`}}onClick={this.toggleDrawer('left', true)}>
              <MenuIcon/>
            </IconButton>}

            <SwipeableDrawer className={classes.menuButton} open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
              <div style={{color:`#588D61`}} tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
                {sideList}
              </div>
            </SwipeableDrawer>
          </div>

           <Typography variant="title" className={classes.flex} style={{color:`#588D61`, fontSize:'30px'}} >
            AgroXchange
          </Typography>


          {
            auth && (<div>


              <IconButton aria-owns={openNew
                  ? 'menu-lang'
                  : null} aria-haspopup="true" onClick={this.handleNewMenu} color="inherit">
                <Translate/>
              </IconButton>

                <IconButton style={{marginRight:"10px"}}>
                  <Button size='small' onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="/images/en.svg"/></Button>

                  <Button  size='small' onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="/images/es.svg"/></Button>
                  </IconButton>




            </div>)
          }
        </Toolbar>
      </AppBar>
    </div>)
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId,
    currentProfileRole: jwtDecoded.role
  }
}

export default compose(translate("translations"), connect(mapStateToProps), withStyles(styles))(NavBar)
