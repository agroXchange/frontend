import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { Link , Redirect} from "react-router-dom"
import { fetchPendingUsers, approveUser, deleteUser } from "../../actions/users"
import { assignImage, searchingByName } from "./lib/lib"
import * as combine from "lodash/fp/compose"
import List, { ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "material-ui/List"
import DeleteIcon from "@material-ui/icons/Delete"
import Button from "material-ui/Button"
import IconButton from "material-ui/IconButton"
import Avatar from "material-ui/Avatar"
import Divider from "material-ui/Divider"
import Dialog, { DialogTitle, DialogActions } from "material-ui/Dialog"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "material-ui/TextField"
import {jwtPayload} from '../../jwt'

class UsersList extends PureComponent {
  state = {
    open: false,
    users: this.props.users,
    term: ""
  }


  handleOpen = id => {
    this.setState({ [`open${id}`]: true })
  }

  handleClose = id => {
    this.setState({ [`open${id}`]: false })
  }

  componentWillMount(props) {
    this.props.fetchPendingUsers()
  }

  deleteUser = id => {
    this.props.deleteUser(id)
    this.handleClose()
  }

  searchHandler = event => {
    this.setState({ term: event.target.value })
  }


  renderMessage = users => {
    return (
      <Dialog open={users.length === 0} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          There are no pending users
        </DialogTitle>
        <Link style={{textDecoration: 'none'}} to={`/admin`}>
          <Button size="medium" color="primary">
            Admin Page
          </Button>
        </Link>
      </Dialog>
    )
  }

  renderChamberOfCommerce = chamberOfCommerce => {
    if (chamberOfCommerce) {
      return chamberOfCommerce
    } else {
      return "No chamber of commerce provided"
    }
  }

  render() {
    const users = this.props.users
    if (!users) return null
      if (this.props.currentUserRole !== "admin") return <Redirect to="/error" />

    return (
      <div>
      <Button
        onClick={() => this.props.history.goBack()}
        size="medium"
        color="primary"
        style={{display:'flex', flex:1}}
      >
        Go Back
      </Button>
      <form>
        <div
          style={{
            display: "flex",
            width: "300px",
            margin: 0,
            marginLeft: "20px",
            marginTop: "20px"
          }}
        >
          <IconButton>
            <SearchIcon />
          </IconButton>
          <TextField
            label="Search User"
            type="text"
            onChange={this.searchHandler}
          />
        </div>
      </form>
        <h1> Pending Users List</h1>
        {this.renderMessage(users)}
        {users.filter(searchingByName(this.state.term)).map(user => (
          <List>
            <ListItem onClick={() => this.props.history.push(`/admin/pending/profiles/${user.id}`)}>
              <ListItemAvatar>
                  <Avatar>
                    <img
                      style={{width:'50px'}}
                      src={assignImage(user.profile.logo)}
                      alt=""
                    />
                  </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={"Company name: " + user.profile.name}
                secondary={
                  "Chamber Of Commerce: " +
                  this.renderChamberOfCommerce(user.profile.chamberOfCommerce)
                }
              />
              </ListItem>
              <ListItemSecondaryAction>
                <IconButton onClick={() => this.handleOpen(user.id)}>
                  <DeleteIcon />
                </IconButton>
                <Dialog
                  open={this.state[`open${user.id}`]}
                  onRequestClose={_ => this.handleClose(user.id)}
                >
                  <DialogTitle>
                    {`Are you sure do you want to delete ${user.profile.name}?`}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={() => this.handleClose(user.id)} primary>
                      {"Cancel"}
                    </Button>
                    <Button onClick={() => this.deleteUser(user.id)} primary>
                      {"Yes"}
                    </Button>
                  </DialogActions>
                </Dialog>
              </ListItemSecondaryAction>
              <Divider inset={true} />

            <Divider inset={true} />
          </List>
        ))}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    users: state.users,
    currentUserRole: jwtDecoded.role,
  }
}

export default combine(
  connect(mapStateToProps, { fetchPendingUsers, approveUser, deleteUser })
)(UsersList)
