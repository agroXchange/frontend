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

class ForgotPasswordForm extends PureComponent {
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
            id="email"
            name="email"
            label={t("Email")}
            className={classes.textField}
            margin="normal"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          type="submit"
        >
          {t("forgotPassword")}
        </Button>
      </form>
    );
  }
}

export default compose(translate("user"), withStyles(styles))(ForgotPasswordForm);
