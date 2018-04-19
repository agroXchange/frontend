import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { fetchUser, updateUser } from "../../actions/users"
import { assignImage } from "./lib/lib"
import Button from "material-ui/Button"
import Typography from "material-ui/Typography"
import EditUserForm from "./EditUserForm"
import IconButton from "material-ui/IconButton"
import EditIcon from "@material-ui/icons/Edit"
import * as combine from "lodash/fp/compose"
import { translate } from "react-i18next"
import Dialog, { DialogTitle } from "material-ui/Dialog"
import {jwtPayload} from '../../jwt'
import { Redirect} from "react-router-dom"

class AdminProfilePage extends PureComponent {
  state = {
    edit: false
  }

  handleEditClose = () => {
    this.setState({ edit: false });
  }

  handleEditOpen = () => {
    this.setState({ edit: true });
  }

  componentWillMount(props) {
    this.props.fetchUser(this.props.match.params.id);
  }

  updateUser = user => {
    this.props.updateUser(this.props.match.params.id, user);
    this.handleEditClose();
  }

  render() {
    const { user, t } = this.props;
    if (!user) return null;
    if (this.props.currentUserRole !== "admin") return <Redirect to="/error" />

    return (
      <div key={user.id} className="user-card">
      <Button
        onClick={() => this.props.history.goBack()}
        size="medium"
        color="primary"
        style={{display:'flex', flex:1}}
      >
        Go Back
      </Button>
        <div className="photo">
          <img
            style={{ marginTop: "50px" }}
            src={assignImage(user.logo)}
            alt="img"
            width="100"
          />
        </div>
        <IconButton onClick={this.handleEditOpen} aria-label="Edit">
          <EditIcon />
        </IconButton>
        <div className="info">
          <Typography variant="headline" component="h2">
            {user.name}
          </Typography>

          <Typography color="textSecondary">
            {t("field")}: {user.field}
          </Typography>
          <Typography color="textSecondary">
            {t("type")}: {user.type}
          </Typography>
          <Typography color="textSecondary">
            {t("coc")}: {user.chamberOfCommerce}
          </Typography>
          <Typography color="textSecondary">
            {t("address")}: {user.address}
          </Typography>
          <Typography color="textSecondary">
            {t("cityPort")}: {user.city}
          </Typography>
          <Typography color="textSecondary">
            {t("country")}: {user.country}
          </Typography>
          <Typography color="textSecondary">
            {t("phone")}: {user.phone}
          </Typography>

          <Typography color="textSecondary">
            {t("Email")}: {user.email}
          </Typography>

          <Dialog
            open={this.state.edit}
            onClose={this.handleEditClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Update User</DialogTitle>
            {this.state.edit && (
              <EditUserForm
                initialValues={user}
                onSubmit={this.updateUser}
              />
            )}
          </Dialog>

          <div>
            <Button
              onClick={() => this.props.history.push(`/admin/profiles/${user.id}/products`)}
              size="medium"
              color="primary"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    user: state.user,
    currentUserRole: jwtDecoded.role,
  }
}

export default combine(
  translate("user"),
  connect(mapStateToProps, { fetchUser, updateUser })
)(AdminProfilePage);
