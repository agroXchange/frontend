import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser } from "../../actions/users";
import { assignImage } from './lib/lib'
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "material-ui/Button";
import Card, { CardActions, CardContent } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
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

  deleteUser = id => {
    this.props.deleteUser(id);
  };

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
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => this.deleteUser(user.id)}
                  onClick={() => {
                  if (window.confirm('Are you sure you wish to delete this student?'))
                  this.deleteUser(user.id)}}
                  aria-label="Delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        ))}
        <Card>
          <Link to={`/admin`}>
            <Button size="medium" color="primary">
              Admin Page
            </Button>
          </Link>
        </Card>
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
