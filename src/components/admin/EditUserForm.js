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

class EditUserForm extends PureComponent {
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
            required
            id="name"
            name="name"
            label="Name"
            className={classes.textField}
            margin="normal"
            value={this.state.name || initialValues.name || ' '}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="field">Field</InputLabel>
            <Select
              required
              input={<Input name="field" id="field" />}
              value={this.state.field || initialValues.field || ''}
              onChange={this.handleChange}
            >
              <MenuItem value="producer">Producer</MenuItem>
              <MenuItem value="trader">Trader</MenuItem>
              <MenuItem value="logistics">Logistics</MenuItem>
              <MenuItem value="insurance">Insurance</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              required
              value={this.state.type || initialValues.type || ''}
              onChange={this.handleChange}
              inputProps={{
                name: "type",
                id: "type"
              }}
            >
              <MenuItem value="cooperative">Cooperative</MenuItem>
              <MenuItem value="association">Association</MenuItem>
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="ngo">NGO</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <TextField
            required
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
            required
            id="country"
            name="country"
            label="Country"
            className={classes.textField}
            margin="normal"
            value={this.state.country || initialValues.country || ''}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="city"
            name="city"
            label="Nearest city/port"
            className={classes.textField}
            margin="normal"
            value={this.state.city || initialValues.city || ''}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            required
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
            id="chamberOfCommerce"
            name="chamberOfCommerce"
            label="Registration number"
            className={classes.textField}
            margin="normal"
            value={this.state.chamberOfCommerce || initialValues.chamberOfCommerce || ''}
            onChange={this.handleChange}
          />
          <TextField
            required
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
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Edit User
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(EditUserForm);
