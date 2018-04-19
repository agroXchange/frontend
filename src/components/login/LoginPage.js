import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { login } from "../../actions/users"
import LoginForm from "./LoginForm"
import ForgotPasswordForm from "../password/ForgotPasswordForm"
import { Redirect } from "react-router-dom"
import { translate } from "react-i18next"
import * as combine from "lodash/fp/compose"
import Typography from "material-ui/Typography"
import Button from "material-ui/Button"
import Paper from "material-ui/Paper"
import Dialog, {  DialogTitle } from "material-ui/Dialog"
import { sendForgotPassword } from "../../actions/password"

class LoginPage extends PureComponent {
  state = {}

  handleSubmit = data => {
    this.props.login(data.email, data.password)
  }

  handleForgetSubmit = data => {
    this.props.sendForgotPassword(data.email)
  }

  handleClose = () => {
    this.setState({ forgotPassword: false })
  }

  handleForgotPasswordOpen = () => {
    this.setState({ forgotPassword: true })
  }

  render() {
    const { t } = this.props
    if (this.props.currentUser) return <Redirect to="/dashboard" />;

    return (
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block",
          marginTop: "40px"
        }}
        className="outer-paper"
      >
        <Typography gutterBottom variant="headline" component="h1">
          {t("Log in")}
        </Typography>
        <LoginForm onSubmit={this.handleSubmit} />
        {this.props.error && (
          <div><span style={{ color: "red" }}>{this.props.error}</span></div>
        )}
        {this.props.success && (
          <div><span style={{ color: "green" }}>{this.props.success}</span></div>
        )}
        <Button color="primary" onClick={this.handleForgotPasswordOpen}>
          {t("forgotPassword?")}
        </Button>
        <Dialog
          open={this.state.forgotPassword}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            {t("forgotPassword")}
          </DialogTitle>
          <ForgotPasswordForm onSubmit={this.handleForgetSubmit} />
        </Dialog>
        <Typography color="textSecondary">{t("notmember")}</Typography>
        <Button color="primary" component={Link} to="/signup">
          {t("Sign up")}
        </Button>
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error,
    success: state.password.message,
  }
}

export default combine(
  translate("user"),
  connect(mapStateToProps, { login, sendForgotPassword })
)(LoginPage)
