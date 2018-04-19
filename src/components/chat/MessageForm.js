import React, { PureComponent } from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import SendIcon from "@material-ui/icons/Send"
import IconButton from 'material-ui/IconButton'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300
  },

  container: {
    display: "inline-block",
    flexWrap: "wrap",
    maxWidth: 420,
    alignItem: "center"
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 280,
  }
});

class MessageForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)
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
          <IconButton type="submit" ><SendIcon/></IconButton>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(MessageForm);
