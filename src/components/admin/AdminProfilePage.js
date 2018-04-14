import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/users";
import { assignImage } from './lib/lib'
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import EditUserForm from './EditUserForm'
import IconButton from "material-ui/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import compose from "lodash/fp/compose";
import { translate } from "react-i18next";

class AdminProfilePage extends PureComponent {
  state = {
    edit: false
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    });
  };

  componentWillMount(props) {
    this.props.fetchUser(this.props.match.params.id);
  }

  updateUser = user => {
    this.props.updateUser(this.props.match.params.id, user);
    this.toggleEdit();
  };


  render() {
    const { user, t } = this.props;
    if (!user || !user.profile) return null;

    return (
      <Paper className="outer-paper">
        <div key={user.profile.id} className="user-card">
          <div className="photo">
            <img src={assignImage(user.profile.logo)} alt="img" width="100" />
          </div>
          <div className="info">
            {!this.state.edit && (
              <Typography variant="headline" component="h2">
                {user.profile.name}
              </Typography>
            )}
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
            <IconButton onClick={this.toggleEdit} aria-label="Edit">
              <EditIcon />
            </IconButton>
            {this.state.edit && (
         <EditUserForm
           initialValues={user.profile}
           onSubmit={this.updateUser}
         />
       )}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  };
};


export default compose(
  translate("user"),
  connect(mapStateToProps, {fetchUser, updateUser})
)(AdminProfilePage);
