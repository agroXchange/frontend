import React, { PureComponent } from "react";
import List from 'material-ui/List'
import Message from "./Message"
import {connect} from 'react-redux'
import {markMessage} from "../../actions/chat"

class MessageList extends PureComponent {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
    const {messages, markMessage} = this.props
    const msgId = messages[messages.length - 1].id
    markMessage(msgId)
  }

  scrollToBottom() {
    this.el.scrollIntoView();
  }

  render() {
    const {messages} = this.props

    return (
      <List
        style ={{
          maxHeight: '50vh',
          maxWidth: '90vw',
          overflowY: 'auto',
          overflowWrap: 'break-word'
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

export default connect(null, { markMessage })(MessageList)
