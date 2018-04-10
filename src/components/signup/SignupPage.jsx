import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../../actions/users'
import SignupForm from './SignupForm'
import {Redirect} from 'react-router-dom'

class SignupPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Sign up</h1>
				<p><i>*Fields marked with * are necessary</i></p>
				<SignupForm onSubmit={this.handleSubmit} />

				<p style={{color:'red'}}>{ this.props.signup.error }</p>
				<p>Already registered? Go to login</p>
				<button type="button">Log in</button>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
