import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import compose from "lodash/fp/compose";
import { translate } from "react-i18next";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 320,
    alignItem: "center"
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

class ResetPasswordForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { t } = this.props;
    const { classes } = this.props;

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div>
          <TextField
            required
            id="password"
            name="password"
            label={t("Password")}
            className={classes.textField}
            helperText={t("minPassLength")}
            type="password"
            margin="normal"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            required
            id="confirmPassword"
            name="confirmPassword"
            label={t("confirmPassword")}
            className={classes.textField}
            type="password"
            margin="normal"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
        </div>
        {this.state.password &&
          this.state.confirmPassword &&
          this.state.password !== this.state.confirmPassword && (
            <p style={{ color: "red" }}>{t("confirmError")}</p>
          )}
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          type="submit"
        >
          {t("resetPassword")}
        </Button>
      </form>
    );
  }
}

export default compose(translate("user"), withStyles(styles))(ResetPasswordForm);
