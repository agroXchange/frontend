import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/users";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router-dom";
import { translate } from "react-i18next";
import compose from "lodash/fp/compose";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password);
  };

  render() {
    const { t } = this.props;
    if (this.props.currentUser) return <Redirect to="/" />;

    return (
      <Paper style={{ textAlign: "center", display:"inline-block",marginTop:"40px" }}className="outer-paper">
        <Typography gutterBottom variant="headline" component="h1">
          {t("Log in")}
        </Typography>
        <LoginForm onSubmit={this.handleSubmit} />
        {this.props.error && (
          <span style={{ color: "red" }}>{this.props.error}</span>
        )}
        <Typography color="textSecondary">{t("notmember")}</Typography>
        <Button color="primary" component={Link} to="/signup">
          {t("Sign up")}
        </Button>
      </Paper>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error
  };
};

export default compose(translate("user"), connect(mapStateToProps, { login }))(
  LoginPage
);
