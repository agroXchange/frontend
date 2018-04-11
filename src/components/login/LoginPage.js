import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'	
import {login} from '../../actions/users'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

class LoginPage extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<Typography gutterBottom variant="headline" component="h1">
          Log in
        </Typography>

				<LoginForm onSubmit={this.handleSubmit}/>

        { this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }

				<Typography color="textSecondary">Not a member yet? Go to </Typography>
        <Button color="primary" component={Link} to="/signup">Sign up</Button>
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

export default connect(mapStateToProps, {login})(LoginPage)
