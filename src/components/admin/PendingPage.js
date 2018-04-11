import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Card from "material-ui/Card";
import { CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent } from "material-ui/Card";
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import { fetchUsers } from "../../actions/users";
import compose from 'lodash/fp/compose'

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
  componentWillMount(props) {
    this.props.fetchUsers();
  }


  render() {
    const { classes } = this.props;
    const users = this.props.users

    return (
      <MuiThemeProvider>
        {users.map(user => (
          <Card className={classes.card} zDepth={3} circle={true}>
            <CardHeader title={user.role} />
            <CardMedia>
              <img
                className={classes.media}
                src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"
                alt=""
              />
            </CardMedia>
            <CardContent>
              <p>{user.profile.name}</p>
              <p>{user.profile.address}</p>
              <p>{user.profile.country}</p>
              <Button size="medium" color="primary">
                Approve
              </Button>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
        <Card>
          <Link to={`/admin`}>
            <Button size="medium" color="primary">
              Admin Page
            </Button>
          </Link>
        </Card>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    users: state.users,
  };
};

export default compose(
  withStyles(style),
  connect(mapStateToProps,{fetchUsers})
)(PendingPage)
