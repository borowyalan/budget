import React, { Component } from "react";
import { auth } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";

import "./SignIn.scss";

class SignIn extends Component {
	state = { email: "", password: "" };

	handleChange = event => {
		let { name, value } = event.target;
		if (name === "email") {
			value = value.toLowerCase();
		}
		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();

		console.log(this.state.email, this.state.password);
		// auth.signInWithEmailAndPassword(this.state.email, this.state.password);
		auth.signInWithEmailAndPassword(this.state.email, this.state.password);
		this.setState({ email: "", password: "" });
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
					<input type='submit' value='Sign In' />
					{/* <button>Sign In With Google</button> */}
				</form>
			</div>
		);
	}
}

export default SignIn;
