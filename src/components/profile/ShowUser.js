import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchUsers, fetchUser} from "../../actions/users";
// import { userId } from "../../jwt";
import Paper from "material-ui/Paper";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

class ShowUser extends PureComponent {
  componentWillMount(props) {
    if (this.props.authenticated) {
      this.props.getUser(this.props.match.params.id);
      if (this.props.users === null) this.props.FetchUsers();
    }
  }

  // handleClick = () => {
  //   const { setStatus, index } = this.props
  //   setStatus(index)
  // }

  render() {
    const { users, authenticated, userId } = this.props;

    if (!authenticated) return <Redirect to="/login" />;

    return (
      <Paper className="outer-paper">
      </Paper>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  // userId: state.currentUser && userId(state.currentUser.jwt),
  // users: state.users === null ? null : state.users,
  profile: state.profiles && state.profiles[props.match.params.id]
  // user: state.users.find(u => u.id === Number(props.match.params.id))
});

const mapDispatchToProps = {
  fetchUsers,
  fetchUser

};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUser);
