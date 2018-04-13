import React, { PureComponent } from "react";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import compose from 'lodash/fp/compose'
import {translate, Trans} from "react-i18next"

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

    const { t, i18n } = this.props

    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <div>
          <TextField
            required
            id="name"
            name="name"
            label={t('name')}
            className={classes.textField}
            margin="normal"
            helperText={t('whatName?')}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="field">{t('field')}*</InputLabel>
            <Select
              required
              input={<Input name="field" id="field" />}
              value={this.state.field}
              onChange={this.handleChange}
            >
              <MenuItem value="producer">{t('producer')}</MenuItem>
              <MenuItem value="trader">{t('trader')}</MenuItem>
              <MenuItem value="logistics">{t('logistics')}</MenuItem>
              <MenuItem value="insurance">{t('insurance')}</MenuItem>
              <MenuItem value="other">{t('other')}</MenuItem>
            </Select>
            <FormHelperText>{t('whatField?')}</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">{t('type')}*</InputLabel>
            <Select
              required
              value={this.state.type}
              onChange={this.handleChange}
              inputProps={{
                name: "type",
                id: "type"
              }}
            >
              <MenuItem value="cooperative">{t('cooperative')}</MenuItem>
              <MenuItem value="association">{t('association')}</MenuItem>
              <MenuItem value="private">{t('private')}</MenuItem>
              <MenuItem value="ngo">{t('ngo')}</MenuItem>
              <MenuItem value="other">{t('other')}</MenuItem>
            </Select>
            <FormHelperText>
              {t('whatType?')}
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <TextField
            required
            id="address"
            name="address"
            label={t('address')}
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
            label={t('country')}
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
            label={t('cityPort')}
            className={classes.textField}
            helperText={t('whatCityPort?')}
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
            label={t('phone')}
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
            label={t('registration')}
            className={classes.textField}
            helperText={t('cocOptional')}
            margin="normal"
            value={this.state.chamberOfCommerce}
            onChange={this.handleChange}
          />
          <Typography color="textSecondary">
            {t('cocExplanation')}
          </Typography>
          <TextField
            required
            id="email"
            name="email"
            label={t('Email')}
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
            label={t('Password')}
            className={classes.textField}
            helperText={t('minPassLength')}
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
            label={t('confirmPassword')}
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
            <p style={{ color: "red" }}>{t('confirmError')}</p>
          )}
        <Button variant="raised" color="primary" className={classes.button} type="submit">
          {t('Sign up')}
        </Button>
      </form>
    );
  }
}

export default compose (
  translate('user'),
  withStyles(styles))(SignupForm)
