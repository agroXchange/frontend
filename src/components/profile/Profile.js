import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { fetchUser } from "../../actions/users"
import Paper from "material-ui/Paper"
import Typography from "material-ui/Typography"
import compose from "lodash/fp/compose"
import { translate } from "react-i18next"

class Profile extends PureComponent {
  render() {
    const { user, t } = this.props;
    if (!user || !user.profile) return null

    return (
      <Paper className="outer-paper">
        <div key={user.profile.id} className="user-card">
          <div className="photo">
            <img src={user.profile.logo} alt="img" width="100" />
          </div>
          <div className="info">
            <Typography variant="headline" component="h2">
              {user.profile.name}
            </Typography>
            <Typography color="textSecondary">
              {t("field")}: {user.profile.field}
            </Typography>
            <Typography color="textSecondary">
              {t("type")}: {user.profile.type}
            </Typography>
            <Typography color="textSecondary">
              {t("coc")}: {user.profile.chamberOfCommerce}
            </Typography>
            <Typography color="textSecondary">
              {t("address")}: {user.profile.address}
            </Typography>
            <Typography color="textSecondary">
              {t("cityPort")}: {user.profile.city}
            </Typography>
            <Typography color="textSecondary">
              {t("country")}: {user.profile.country}
            </Typography>
            <Typography color="textSecondary">
              {t("phone")}: {user.profile.phone}
            </Typography>
            <Typography color="textSecondary">
              {t("Email")}: {user.email}
            </Typography>
          </div>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = ({ user }, props) => ({
  user
})

const mapDispatchToProps = {
  fetchUser
}

export default compose(
  translate("user"),
  connect(mapStateToProps, mapDispatchToProps)
)(Profile)
