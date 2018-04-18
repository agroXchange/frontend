import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Typography from "material-ui/Typography"
import Paper from "material-ui/Paper"
import MessageForm from "./MessageForm"
import MessageList from "./MessageList"
import {getMessages, sendMessage} from "../../actions/chat"
import Button from "material-ui/Button"

class ChatPage extends PureComponent {

  componentWillMount() {
    this.props.getMessages(1)
  }

  handleSubmit = (message) => {
    this.props.sendMessage(1, message)
  }

  render() {
    if (!this.props.currentUser) return <Redirect to="" />;
    const {messages, order} = this.props
    if (!order) return null

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
          Order #{order.id}
        </Typography>
        <MessageList messages={messages} />
        <MessageForm onSubmit={this.handleSubmit} />
        <Button
          size="small"
          color="primary"
          onClick={() => this.props.history.goBack()}
          style={{
            marginBottom: 10,
            marginTop: 10
          }}
        >
          GO BACK
        </Button>
      </Paper>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages,
    order: state.order
  }
}

export default connect(mapStateToProps, { sendMessage, getMessages })(ChatPage)
