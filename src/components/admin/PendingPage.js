import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import { assignImage } from './lib/lib'
import Card from "material-ui/Card";
import {CardHeader, CardMedia, CardContent } from "material-ui/Card";
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "material-ui/Button";
import Dialog, { DialogTitle, DialogActions } from "material-ui/Dialog";
import { fetchPendingUsers, approveUser, deleteUser } from "../../actions/users";
import compose from 'lodash/fp/compose'
import {jwtPayload} from '../../jwt'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const style = theme => ({
  card: {
    height: 400,
    width: 300,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  },
  media: {
    height: 100
  }
});


class PendingPage extends PureComponent {
  state = {
   open: false,
 };

 handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

  componentWillMount(props) {
    this.props.fetchPendingUsers();
  }

  deleteUser = id => {
    this.props.deleteUser(id);
  };

  approveUser = id => {
    this.props.approveUser(id);
  };

  renderMessage = users => {
  return (
    <Dialog open={users.length === 0} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        There are not pending request
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
    const users = this.props.users

    return (
      <MuiThemeProvider>
      {console.log('role  ' + this.props.jwtDecoded[0])}
      {this.renderMessage(users)}
        {users.map(user => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader title={user.role} />
            <CardMedia>
              <Link to={`/admin/profiles/${user.id}`}>
              <img
                className={classes.media}
                src={assignImage(user.profile.logo)}
                alt=""
              />
              </Link>
            </CardMedia>
            <CardContent>
              <p>{user.profile.name}</p>
              <p>{user.profile.address}</p>
              <p>{user.profile.country}</p>

              <Button onClick={() => this.approveUser(user.id)} size="medium" color="primary">
                Approve
              </Button>
              <IconButton onClick={this.handleOpen} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <Dialog
                open={this.state.open}
                onRequestClose={this.handleClose}
              >
                <DialogTitle>
                  {`Are you sure do you want to delete ${user.profile.name}?`}
                </DialogTitle>
                  <DialogActions>
                    <Button onClick={this.handleClose} primary>
                      {"Cancel"}
                    </Button>
                    <Button onClick={() => this.deleteUser(user.id)} primary>
                      {"Yes"}
                    </Button>
                  </DialogActions>
                </Dialog>
            </CardContent>
          </Card>
        ))}
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = jwtPayload(state.currentUser.jwt)
  return {
    users: state.users,
    currentUser: state.currentUser,
    currentUserRole: jwtDecoded.role,
    currentUserId: jwtDecoded.id,
    jwtDecoded
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps,{fetchPendingUsers, approveUser, deleteUser})
)(PendingPage)
