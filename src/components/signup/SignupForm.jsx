import React, { PureComponent } from "react";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Typography from "material-ui/Typography";
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

class SignupForm extends PureComponent {
  state = {
    field: "",
    type: ""
  };

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
    const { classes } = this.props;

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
            helperText="What is the name of your organization?"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="field">Field</InputLabel>
            <Select
              required
              input={<Input name="field" id="field" />}
              value={this.state.field}
              onChange={this.handleChange}
            >
              <MenuItem value="producer">Producer</MenuItem>
              <MenuItem value="trader">Trader</MenuItem>
              <MenuItem value="logistics">Logistics</MenuItem>
              <MenuItem value="insurance">Insurance</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            <FormHelperText>What is your field of business?*</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Select
              required
              value={this.state.type}
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
            <FormHelperText>
              What is the type of your organization?*
            </FormHelperText>
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
            value={this.state.address}
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
            value={this.state.country}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="city"
            name="city"
            label="Nearest city/port"
            className={classes.textField}
            helperText="If you plan to sell, what is the nearest city or port?"
            margin="normal"
            value={this.state.city}
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
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            id="chamberOfCommerce"
            name="chamberOfCommerce"
            label="Registration number"
            className={classes.textField}
            helperText="Chamber of Commerce registration number (optional now)"
            margin="normal"
            value={this.state.chamberOfCommerce}
            onChange={this.handleChange}
          />
          <Typography color="textSecondary">
            To participate on this website, you will need to provide proof of
            your membership of your local chamber of commerce. If you have your
            registration number ready, please fill it in above. You can also do
            this after signing up. If you have any questions, please contact the
            webmaster.
          </Typography>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            className={classes.textField}
            margin="normal"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            className={classes.textField}
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
            label="Confirm password"
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
            <p style={{ color: "red" }}>The passwords do not match!</p>
          )}
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          Sign up
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignupForm);
