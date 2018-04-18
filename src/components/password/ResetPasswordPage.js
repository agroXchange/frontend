import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { resetPassword } from "../../actions/password"
import ResetPasswordForm from "./ResetPasswordForm"
import { Redirect } from "react-router-dom"
import { translate } from "react-i18next"
import * as combine from "lodash/fp/compose"
import Typography from "material-ui/Typography"
import Paper from "material-ui/Paper"

class ResetPasswordPage extends PureComponent {
  handleSubmit = data => {
    const params = new URLSearchParams(this.props.location.search)
    const token = params.get('token')

    this.props.resetPassword(data.password, token)
  }

  render() {
    const { t } = this.props
    if (this.props.currentUser) return <Redirect to="/" />

    return (
      <Paper style={{ textAlign: "center", display:"inline-block",marginTop:"40px" }}className="outer-paper">
        <Typography gutterBottom variant="headline" component="h1">
          {t("resetPassword")}:
        </Typography>
        <ResetPasswordForm onSubmit={this.handleSubmit} />
        {this.props.error && (
          <span style={{ color: "red" }}>{this.props.error}</span>
        )}
        {this.props.success && (
          <Redirect to="/login"/>
        )}
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    success: state.password.message,
    error: state.password.error
  }
}

export default combine(translate("user"), connect(mapStateToProps, { resetPassword }))(
  ResetPasswordPage
)
