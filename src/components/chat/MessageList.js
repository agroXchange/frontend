import React, { PureComponent } from "react";
import List from 'material-ui/List'
import Message from "./Message"

class MessageList extends PureComponent {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView();
  }

  render() {
    const {messages} = this.props

    return (
      <List
        style ={{
          maxHeight: 200,
          overflow: 'auto'
        }}
      >
        {
          messages.map(m => {
            return (
              <Message message={m} />
            )
          })
        }
        <div ref={el => this.el = el} />
      </List>
    );
  }
}

export default MessageList;
