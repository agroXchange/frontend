import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignupForm from "./SignupForm";
import { Redirect } from "react-router-dom";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import compose from 'lodash/fp/compose'
import {translate, Trans} from "react-i18next"

class SignupPage extends PureComponent {
  handleSubmit = newUser => {
    this.props.postSignup(newUser);
  };

  render() {

    const { t, i18n } = this.props

    if (this.props.signup.success) return <Redirect to="/" />;

    return (
      <div>
        <Typography gutterBottom variant="headline" component="h1">
          {t('Sign up form')}
        </Typography>
        <Typography color="textSecondary">
          {t('fieldsNecessary')}
        </Typography>
        <SignupForm onSubmit={this.handleSubmit} />
        <p style={{ color: "red" }}>{this.props.signup.error}</p>
        <Typography color="textSecondary">{t('alreadyRegistered?')}</Typography>
        <Button color="primary">{t('Log in')}</Button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup
  };
};

export default compose(
  translate('user'),
connect((mapStateToProps), { postSignup: signup }))(SignupPage)
