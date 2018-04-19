import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { fetchUser, uploadLogo, updateProfile } from "../../actions/users"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import compose from "lodash/fp/compose"
import { translate } from "react-i18next"
import { jwtPayload } from "../../jwt"
import Button from "material-ui/Button"
import Dialog, { DialogTitle } from "material-ui/Dialog"
import EditProfileForm from "./EditProfileForm"

class Profile extends PureComponent {
  state = {
    upload: false
  }

  componentWillMount(props) {
    if (this.props.user == null)
      this.props.fetchUser(this.props.currentProfileId)
  }

  handleClick = () => {
    this.setState({
      upload: !this.state.upload
    })
  }

  handleFileChange = e => {
    this.setState({
      picture: e.target.files[0]
    })
  }

  handleSubmit = id => {
    this.props.uploadLogo(id, this.state.picture)
    this.setState({
      upload: !this.state.upload
    })
  }

  handleEditProfileOpen = () => {
    this.setState({ editProfile: true })
  }

  handleClose = () => {
    this.setState({ editProfile: false })
  }

  handleEditProfileSubmit = data => {
    this.props.updateProfile(this.props.currentProfileId, data)
    this.handleClose()
  }

  render() {
    const { user, t, currentProfileId } = this.props
    if (!user) return null

    return (
      <div>
        <Button
          onClick={() => this.props.history.goBack()}
          size="medium"
          color="primary"
          style={{ display: "flex", flex: 1, margin: 15 }}
        >
          {t("goBack")}
        </Button>
      <Paper
        style={{
          textAlign: "center",
          display: "inline-block"
        }}
      >
        <div className="photo"
          style={{ marginTop: 15 }}>
          {user.logo === "null" ? (
            <img src={"/images/profile.png"} alt={"default"} width="150" />
          ) : (
            <img src={user.logo} alt={"profilepicture"} width="150" />
          )}
        </div>
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
        </div>
        <div>
          {this.state.upload && (
            <div>
              <Typography
                color="textSecondary"
                style={{
                  marginTop: 10
                }}
              >
                {t("PleaseUploadPhoto")}
              </Typography>
              <input
                accept="image/*"
                id="raised-button-file"
                type="file"
                name="photo"
                className="upload-input"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                onChange={this.handleFileChange}
              />
              <Button
                variant="raised"
                color="primary"
                style={{
                  marginBottom: 10
                }}
                onClick={_ => this.handleSubmit(user.id)}
              >
                {t("uploadPicture")}
              </Button>
            </div>
          )}
          {currentProfileId === user.id &&
            !this.state.upload && (
              <Button onClick={this.handleClick}>{t("uploadPicture")}</Button>
            )}
          {currentProfileId === user.id && (
            <Button onClick={this.handleEditProfileOpen}>
              {t("editMyProfile")}
            </Button>
          )}
          <Dialog
            open={this.state.editProfile}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">{t("editProfile")}</DialogTitle>
            <EditProfileForm
              onSubmit={this.handleEditProfileSubmit}
              initialValues={user}
            />
          </Dialog>
        </div>
      </Paper>
    </div>

    )
  }
}

const mapStateToProps = ({ user, currentUser }, props) => {
  const jwtDecoded = currentUser ? jwtPayload(currentUser.jwt) : {}
  return {
    user,
    currentProfileId: jwtDecoded.profileId
  }
}

const mapDispatchToProps = {
  fetchUser,
  uploadLogo,
  updateProfile
}

export default compose(
  translate("user"),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile)
