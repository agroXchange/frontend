import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import compose from 'lodash/fp/compose'
import {translate, Trans} from "react-i18next"

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {

		const { t, i18n } = this.props

		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<Typography gutterBottom variant="headline" component="h1">
          {t('Log in')}
        </Typography>

				<LoginForm onSubmit={this.handleSubmit}/>

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

				<Typography color="textSecondary">{t('notmember')}</Typography>
        <Button color="primary" component={Link} to="/signup">{t('Sign up')}</Button>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default compose(
  translate('user'),
  connect((mapStateToProps), {login}))(LoginPage)
