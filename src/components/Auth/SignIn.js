import React, { Component } from "react";
import { auth, authInstance } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { ScaleLoader } from "react-spinners";
import "./SignIn.scss";

class SignIn extends Component {
	state = { email: "", password: "", loading: false };

	handleChange = event => {
		let { name, value } = event.target;
		if (name === "email") {
			value = value.toLowerCase();
		}
		this.setState({ [name]: value });
	};

	handleSubmit = async event => {
		event.preventDefault();
		if (this.state.email !== "" || this.state.password !== "") {
			this.setState({ loading: true });
		}

		await auth
			.setPersistence(authInstance.Auth.Persistence.LOCAL)
			.then(() => {
				return auth.signInWithEmailAndPassword(
					this.state.email,
					this.state.password
				);
			})
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});

		await this.setState({password: "", loading: false });
	};

	render() {
		const { email, password } = this.state;

		return (
			<div className='SignIn--container'>
				<form className='SignIn' onSubmit={this.handleSubmit}>
					{/* <h2>Sign In</h2> */}
					<h2>
						<FontAwesomeIcon icon={faCommentsDollar} />
					</h2>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={email}
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						onChange={this.handleChange}
					/>
					<>
						{this.state.loading ? (
							<div className='SignIn--spinner'>
								<ScaleLoader />
							</div>
						) : (
							<input type='submit' value='Sign In' />
						)}
					</>
				</form>
			</div>
		);
	}
}

export default SignIn;
