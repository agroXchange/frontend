import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Translate from '@material-ui/icons/Translate';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import compose from 'lodash/fp/compose'
import {translate} from "react-i18next"
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class NavBar extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleNewMenu = event => {
    this.setState({ El: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleNewClose = () => {
    this.setState({ El: null });
  };
  render() {
    const { classes } = this.props;
    const { auth, anchorEl, El } = this.state;
    const open = Boolean(anchorEl);
    const openNew = Boolean(El);

    const { i18n } = this.props

    const changeLanguage = lng => {
      i18n.changeLanguage(lng)
    }

    return (
      <div className={classes.root}>

        <AppBar position="static">
          <Toolbar>

            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>


            <Typography variant="title" color="inherit" className={classes.flex}>
              AgroXchange
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />

                </IconButton>

                <IconButton
                  aria-owns={openNew ? 'menu-lang' : null}
                  aria-haspopup="true"
                  onClick={this.handleNewMenu}
                  color="inherit"
                >
                <Translate />
                </IconButton>

                <Menu
                  id="menu"
                  anchorEl={El}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openNew}
                  onClose={this.handleNewClose}
                >
                <MenuItem> <button onClick={() => changeLanguage("en")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg" /></button></MenuItem>
                  <MenuItem> <button onClick={() => changeLanguage("es")}><img className="LanguageDetector" src="https://lipis.github.io/flag-icon-css/flags/4x3/es.svg" /></button></MenuItem>

                </Menu>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem> <Link to='/orders'>Profile</Link></MenuItem>
                  <MenuItem> onClick={this.handleClose}>My account</MenuItem>
                  <MenuItem><Link to='/logout'>Log out</Link></MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default compose(
  translate("translations"),
  withStyles(styles))(NavBar);
