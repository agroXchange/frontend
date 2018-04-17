import React, { PureComponent } from "react"
import { connect } from "react-redux"
import {fetchUser, uploadLogo} from "../../actions/users"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import compose from "lodash/fp/compose"
import { translate } from "react-i18next"
import {jwtPayload} from "../../jwt"
import Button from "material-ui/Button"

class Profile extends PureComponent {
  state = {
    upload: false
  }

  handleClick = () => {
    this.setState({
      upload: !this.state.upload
    })
  }

  handleFileChange = (e) => {
    this.setState({
      picture: e.target.files[0]
    })
  }

  handleSubmit = (id) => {
    this.props.uploadLogo(id, this.state.picture)
    this.setState({
      upload: !this.state.upload
    })
  }

  render() {
    const { user, t, currentProfileId} = this.props;
    if (!user) return null

    return (
      <Paper className="outer-paper">
        <div key={user.id} className="user-card">
          <div className="photo">
            <img src={user.logo} alt="img" width="100" />
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
            {
              this.state.upload && (
                <div>
                  <Typography
                    color="textSecondary"
                    style={{
                      marginTop: 10
                    }}
                  >
                    Please Upload a Photo
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
                    Upload Picture
                  </Button>
                </div>
              )
            }
            {
              currentProfileId === user.id &&
              !this.state.upload &&
              <Button onClick={this.handleClick} >
                Upload Picture
              </Button>
            }
          </div>
        </div>
      </Paper>
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
  uploadLogo
}

export default compose(
  translate("user"),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile)
