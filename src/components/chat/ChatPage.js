import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { login } from "../../actions/users"
import { Redirect } from "react-router-dom"
import Typography from "material-ui/Typography"
import Paper from "material-ui/Paper"
import { sendForgotPassword } from "../../actions/password"
import List, {ListItem, ListItemText} from "material-ui/List"
import Divider from 'material-ui/Divider'
import MessageForm from "./MessageForm"
import StayScrolled from 'react-stay-scrolled'
import MessageList from "./MessageList"
import {getMessages, sendMessage} from "../../actions/chat"

const messages = [
  {
    content: 'test',
    sender: {
      name: 'Test1'
    }
  },
  {
    content: 'asdlkfjalksdjf',
    sender: {
      name: 'Test1'
    }
  },
  {
    content: 'tesSLKJWt',
    sender: {
      name: 'Test2'
    }
  },
  {
    content: 'teSJDLKFJst',
    sender: {
      name: 'Test1'
    }
  },
  {
    content: 'sjlksjdflkjTEST',
    sender: {
      name: 'Test2'
    }
  }
]

const message = {
  content: 'sjlksjdflkjTEST',
  sender: {
    name: 'Test2'
  }
}

class ChatPage extends PureComponent {
  state = {messages}

  componentWillMount() {
    this.props.getMessages(1)
  }

  handleSubmit = (message) => {
    this.props.sendMessage(1, message)
  }

  render() {
    //if (!this.props.currentUser) return <Redirect to="" />;
    const {messages} = this.props

    return (
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block",
          marginTop: "40px"
        }}
        className="outer-paper"
      >
        <Typography gutterBottom variant="headline" component="h1">
          Chat
        </Typography>
        <MessageList messages={messages} />
        <MessageForm onSubmit={this.handleSubmit} />
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { sendMessage, getMessages })(ChatPage)
