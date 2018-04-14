import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../../actions/users";
import { assignImage } from "./lib/lib";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "material-ui/List";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import Avatar from "material-ui/Avatar";
import Divider from "material-ui/Divider";
import Dialog, { DialogTitle } from "material-ui/Dialog";

const style = theme => ({
  card: {
    height: 550,
    width: 300,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
  }
});

class UsersList extends PureComponent {
  componentWillMount(props) {
    this.props.fetchUsers();
  }

  deleteUser = id => {
    this.props.deleteUser(id);
  };

  renderMessage = users => {
    return (
      <Dialog open={users.length === 0} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">There are not users</DialogTitle>
        <Link to={`/admin`}>
          <Button size="medium" color="primary">
            Admin Page
          </Button>
        </Link>
      </Dialog>
    );
  };

  render() {
    const users = this.props.users;
    const classes = this.props;

    if (!users) return null;

    return (
      <div>
        <h1> Users List</h1>
        {this.renderMessage(users)}
        {users.map(user => (
          <List>
            <ListItem>
              <ListItemAvatar>
                <Link to={`/admin/profiles/${user.id}`}>
                  <Avatar>
                    <img
                      className={classes.media}
                      src={assignImage(user.profile.logo)}
                      alt=""
                    />
                  </Avatar>
                </Link>
              </ListItemAvatar>

              <ListItemText
                primary={user.profile.name}
                secondary={user.profile.country}
              />
              <Link to={`/admin/profiles/${user.id}`}>
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Link>
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this student?"
                      )
                    )
                      this.deleteUser(user.id);
                  }}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
              <Divider inset={true} />
            </ListItem>
            <Divider inset={true} />
          </List>
        ))}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps, { fetchUsers, deleteUser })
)(UsersList);
