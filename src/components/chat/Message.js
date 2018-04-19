import React, { PureComponent } from "react";
import {ListItem, ListItemText} from 'material-ui/List'
import Divider from 'material-ui/Divider'

class Message extends PureComponent {

  render() {
    const {message} = this.props

    return (
      <ListItem divider>
        <ListItemText primary={message.sender.name} secondary={message.content} />
        <Divider/>
      </ListItem>
    );
  }
}

export default Message;
