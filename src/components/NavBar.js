import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Translate from '@material-ui/icons/Translate';
import Switch from 'material-ui/Switch';
import {FormControlLabel, FormGroup} from 'material-ui/Form';
import Menu, {MenuItem} from 'material-ui/Menu';
import compose from 'lodash/fp/compose'
import {translate} from "react-i18next"
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import { withRouter } from "react-router";
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

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
};

class NavBar extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    auth: true,
    anchorEl: null,
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({[side]: open});
  };

  handleChange = (event, checked) => {
    this.setState({auth: checked});
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleNewMenu = event => {
    this.setState({El: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleNewClose = () => {
    this.setState({El: null});
  };
  render() {
    const {classes, currentUser} = this.props;
    const {auth, anchorEl, El} = this.state;
    const open = Boolean(anchorEl);
    const openNew = Boolean(El);

    const {i18n} = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }

    const sideList = ( <div className={classes.list}>

      <div>
        <ListItem button="button">
          <ListItemIcon>
            <StarIcon/>
          </ListItemIcon>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/profile'>My profile</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/products'>My products</Link>
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
          <Link to='/search'>AgroXpress</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/about'>About</Link>
        </ListItem>

        <ListItem button="button">
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <Link to='/logout'>Logout</Link>
        </ListItem>
      </div>
    </div>);


    return (<div>

      <AppBar position="static" style={{backgroundColor:'#5088b7'}}>
        <Toolbar>
      <div>
          {currentUser &&      <IconButton color="inherit" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon/>
            </IconButton>}

            <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
              <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
                {sideList}
              </div>
            </SwipeableDrawer>
          </div>

           <Typography variant="title" color="inherit" className={classes.flex}>
            AgroXchange
          </Typography>


          {
            auth && (<div>
        {currentUser &&       <IconButton aria-owns={open
                  ? 'menu-appbar'
                  : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
                <AccountCircle/>

              </IconButton> }

              <IconButton aria-owns={openNew
                  ? 'menu-lang'
                  : null} aria-haspopup="true" onClick={this.handleNewMenu} color="inherit">
                <Translate/>
              </IconButton>

              <Menu id="menu" anchorEl={El} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} open={openNew} onClose={this.handleNewClose}>
                <MenuItem>
                  <button onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="/images/en.svg"/></button>
                </MenuItem>
                <MenuItem>
                  <button onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="/images/es.svg"/></button>
                </MenuItem>

              </Menu>

              <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }} open={open} onClose={this.handleClose}>
                <MenuItem>
                  <Link to='/orders'>Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/profile'>My account</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/logout'>Log out</Link>
                </MenuItem>

              </Menu>

            </div>)
          }
        </Toolbar>
      </AppBar>
    </div>);
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = function(state) {
  return {currentUser: state.currentUser};
};

export default compose(translate("translations"), connect(mapStateToProps), withStyles(styles))(NavBar);
