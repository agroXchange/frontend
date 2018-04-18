import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SteppedSignupForm from "./SteppedSignupForm";
import { Redirect } from "react-router-dom";
import compose from "lodash/fp/compose";
import { translate } from "react-i18next";
import Paper from "material-ui/Paper";

class SignupPage extends PureComponent {
  handleSubmit = newUser => {
    this.props.postSignup(newUser);
  };

  render() {
    const { authenticated } = this.props;
    if (authenticated) return <Redirect to ="/dashboard" />
    if (this.props.signup.success) return <Redirect to="/" />;

    return (
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block",
          marginTop: "40px",
          itemAlign: "center",
        }}
        className="outer-paper"
      >
        <SteppedSignupForm onSubmit={this.handleSubmit} />
        <p style={{ color: "red" }}>{this.props.signup.error}</p>
      </Paper>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup,
    authenticated: !!state.currentUser
  };
};

export default compose(
  translate("user"),
  connect(mapStateToProps, { postSignup: signup })
)(SignupPage);
