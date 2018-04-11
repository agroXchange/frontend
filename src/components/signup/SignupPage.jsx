import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/users";
import SignupForm from "./SignupForm";
import { Redirect } from "react-router-dom";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

class SignupPage extends PureComponent {
  handleSubmit = newUser => {
    this.props.postSignup(newUser);
  };

  render() {
    if (this.props.signup.success) return <Redirect to="/" />;

    return (
      <div>
        <Typography gutterBottom variant="headline" component="h1">
          Sign up
        </Typography>
        <Typography color="textSecondary">
          *Fields marked with * are necessary
        </Typography>
        <SignupForm onSubmit={this.handleSubmit} />
        <p style={{ color: "red" }}>{this.props.signup.error}</p>
        <Typography color="textSecondary">Already registered? Go to</Typography>
        <Button color="primary">Log in</Button>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    signup: state.signup
  };
};

export default connect(mapStateToProps, { postSignup: signup })(SignupPage);
