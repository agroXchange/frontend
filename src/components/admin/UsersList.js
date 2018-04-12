import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers, deleteUser, updateUser } from "../../actions/users";
import compose from "lodash/fp/compose";
import { withStyles } from "material-ui/styles";
import EditUserForm from './EditUserForm'
import SignupForm from '../signup/SignupForm'
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
  state = {
   edit: false
 };

 toggleEdit = () => {
   this.setState({
    edit: !this.state.edit
  });
 };


  componentWillMount(props) {
    this.props.fetchUsers();
  }

  updateUser = (id, user) => {
    this.props.updateUser(id,user);
    this.toggleEdit();
  };

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
             {!this.state.edit && (
              <ListItemAvatar>
                <Avatar>
                  <img
                    className={classes.media}
                    src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
                    alt=""
                  />
                </Avatar>
              </ListItemAvatar>
            )}
              <ListItemText
                primary={user.profile.name}
                secondary={user.profile.country}
              />

              <ListItemSecondaryAction>
                <IconButton
                  onClick={this.toggleEdit}
                  aria-label="Edit"
                >
                  <EditIcon />
                </IconButton>
                {this.state.edit && (
                  <EditUserForm
                    initialValues={user.profile}
                    onSubmit={() => this.updateUser(user.id,user)}
                  />
                )}
                <IconButton
                  onClick={() => this.deleteUser(user.profile.id)}
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
  connect(mapStateToProps, { fetchUsers, deleteUser, updateUser })
)(UsersList);
