import React, { PureComponent } from "react";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl} from "material-ui/Form";
import Button from "material-ui/Button";

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
      [name]: value || ' '
    })
  }


  render() {
    const { classes } = this.props;
    const initialValues = this.props.initialValues || { }

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div>
          <TextField
            id="address"
            name="address"
            label="Address"
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
            label="Phone number"
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
            label="Email"
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
            label="Chamber of Commerce number"
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

export default withStyles(styles)(EditProfileForm);
