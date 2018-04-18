import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";

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

class MessageForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      message: ''
    })
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
            id="message"
            name="message"
            label="Message"
            className={classes.textField}
            margin="normal"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(MessageForm);
