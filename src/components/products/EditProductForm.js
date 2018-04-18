import React, { PureComponent } from 'react'
import * as combine from "lodash/fp/compose"
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import { InputAdornment } from 'material-ui/Input'
import { translate } from "react-i18next"

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  form: {
    maxWidth: 270,
  },
  textField: {
    marginLeft: 10,
    marginRight: 'auto',
    marginBottom: 'auto',
    width: '90%',
  },
  menu: {
    width: 200,
  },
  paper: {
    paddingBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  button : {
  margin: theme.spacing.unit,
  backgroundColor: `#588D61`,
  color: "white",
  '&:hover': {
     backgroundColor: `#8FBC8F`,
    }
  }
})

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'COP',
    label: 'COL $'
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

class EditProductForm extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value || " "
    })
  }

  render() {
    const { classes, t } = this.props
    const initialValues = this.props.initialValues || " "
    return(
      <form onSubmit={ this.handleSubmit } className={ classes.form }>

          <TextField
            label={ t("Description") }
            id="description"
            name="description"
            value={ this.state.description || initialValues.description || " " }
            onChange={ this.handleChange }
            className={ classes.textField }
          />

          <TextField
            id="certification"
            name="certificate"
            label={ t("Certification") }
            className={classes.textField}
            value={this.state.certificate || initialValues.certificate || '' }
            onChange={this.handleChange}
            margin="normal"
          />

          <TextField
            id="price"
            name="price"
            label={ t("Price") }
            value={this.state.price || initialValues.price || '' }
            onChange={this.handleChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />

          <TextField
            id="currency"
            name="currency"
            select
            label={ t("Please select your currency") }
            className={ classes.textField }
            value={ this.state.currency || initialValues.currency || ''  }
            onChange={ this.handleChange }
            margin="normal"
          >
            { currencies.map(option => (
              <MenuItem key={ option.value } value={ option.value } >
                { option.label }
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label={ t("Volume") }
            id="volume"
            name="volume"
            value={ this.state.volume || initialValues.volume || '' }
            onChange={ this.handleChange }
            className={ classes.textField }
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
          />

          <TextField
            id="harvested"
            name="harvested"
            label={ t("Harvest Date") }
            type="date"
              value={this.state.harvested || initialValues.harvested || '' }
            onChange={ this.handleChange }
            className={ classes.textField }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="expired"
              name="expiration"
            label={ t("Expiry Date") }
            type="date"
              value={this.state.expiration || initialValues.expiration || '' }
            onChange={ this.handleChange }
            className={ classes.textField }
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button
            color="primary"
            className={ classes.button }
            type="submit"
            style={{
              display: 'block',
              margin: 'auto',
              marginTop: 20,
              marginBottom: 20
            }}
          >
            { t("Save") }
          </Button>


      </form>
    )
  }



}

export default combine(
  translate("product"),
  withStyles(styles))(EditProductForm)
