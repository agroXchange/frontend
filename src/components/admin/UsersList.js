import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions/users";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import List, { ListItem, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText } from "material-ui/List";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from 'material-ui/IconButton';
import Avatar from "material-ui/Avatar";

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

  render() {
    const users = this.props.users;
    const classes = this.props;

    if (!users) return null;

    return (
      <div>
        <h1> Users List</h1>
        {users.map(user => (
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <img
                    className={classes.media}
                    src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
                    alt=""
                  />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.profile.name}
                secondary={user.profile.city}
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
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
  connect(mapStateToProps, { fetchUsers })
)(UsersList);
