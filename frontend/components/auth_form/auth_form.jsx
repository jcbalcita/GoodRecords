import React from 'react';
import { Link, withRouter } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';

class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.replace("/home");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors() {
		if (this.props.errors) {
			return(
				<ul>
					{this.props.errors.map((error, i) => (
						<li key={`error-${i}`}>
							{error}
						</li>
					))}
				</ul>
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	render() {
		return (
			<div>
				<GreetingContainer />
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<br/>
						Please {this.props.formType} or {this.navLink()}
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label>
								<input type="text"
									placeholder="Username"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br/>
							<label>
								<input type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default withRouter(AuthForm);
