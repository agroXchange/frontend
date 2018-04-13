import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchUser } from "../../actions/users";
import Typography from "material-ui/Typography";
import compose from 'lodash/fp/compose';
import {translate, Trans} from "react-i18next";
import Profile from "./Profile";

class ProfilePage extends PureComponent {
  componentWillMount(props) {
    if (this.props.authenticated){
      this.props.fetchUser(this.props.match.params.id)};
  }

  render() {
    const {authenticated} = this.props
    if (!authenticated) return <Redirect to="/login" />;
      {console.log('Im here')}
    return (
      <Profile />

    );
  }
}

const mapStateToProps = ({ user, currentUser }, props) => ({
  authenticated: currentUser !== null,
  user
});

const mapDispatchToProps = {
  fetchUser,
};

export default compose (
  translate('user'),
  connect((mapStateToProps), (mapDispatchToProps)))(ProfilePage);
