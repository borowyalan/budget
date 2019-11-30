import React, { useState } from "react";
import { auth, authInstance } from "../../firebase";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { ScaleLoader } from "react-spinners";
import "./SignIn.scss";

export function Login() {
	const [form, setFormValues] = useState({
		email: "",
		password: ""
	});
	const [loading, setLoading] = useState(false);
	let history = useHistory();

	const handleChange = event => {
		let { name, value } = event.target;
		if (name === "email") {
			value = value.toLowerCase();
		}
		setFormValues({ ...form, [name]: value });
	};

	const handleSubmit = async event => {
		event.preventDefault();
		if (form.email !== "" || form.password !== "") {
			setLoading(true);
		}

		await auth
			.setPersistence(authInstance.Auth.Persistence.LOCAL)
			.then(async () => {
				return await auth.signInWithEmailAndPassword(form.email, form.password);
			})
			.then(auth => {
				console.log(auth);
				if (auth) {
					history.push("/");
				}
			})
			.catch(function(error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	return (
		<div className='SignIn--container'>
			<form className='SignIn' onSubmit={handleSubmit}>
				<h2>
					<FontAwesomeIcon icon={faCommentsDollar} />
				</h2>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={form.password}
					onChange={handleChange}
				/>
				<>
					{loading ? (
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

export default Login;
