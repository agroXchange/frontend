import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import compose from "lodash/fp/compose";
import { translate } from "react-i18next";


import TextField from "material-ui/TextField";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300
  },

  container: {
    display: "flex",
    flexWrap: "wrap",
    width: 320
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  menu: {
    width: 300
  }
});

class EditProfileForm extends PureComponent {
  state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}


	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }


  render() {
    const { classes, t } = this.props;
    const initialValues = this.props.initialValues || { }

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div>
          <TextField
            id="address"
            name="address"
            label={t("address")}
            className={classes.textField}
            margin="normal"
            value={this.state.address || initialValues.address || ''}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="phone"
            name="phone"
            label={t("phone")}
            className={classes.textField}
            margin="normal"
            value={this.state.phone || initialValues.phone || ''}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="email"
            name="email"
            label={t("Email")}
            className={classes.textField}
            margin="normal"
            type="email"
            value={this.state.email || initialValues.email || ''}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="chamberOfCommerce"
            name="chamberOfCommerce"
            label={t("cocEdit")}
            className={classes.textField}
            margin="normal"
            value={this.state.chamberOfCommerce || initialValues.chamberOfCommerce || ''}
            onChange={this.handleChange}
          />
        </div>
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Edit my profile
        </Button>
      </form>
    );
  }
}

export default compose(translate("user"), withStyles(styles))(EditProfileForm);
