import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/Expenses";
import Login from "./components/Auth/Login";
import SettingsPage from "./components/SettingsPage";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route, Redirect, Link } from "react-router-dom";

function App() {
	const { userData, userAuth } = useContext(UserContext);

	function PrivateRoute({ children, ...rest }) {
		return (
			<Route
				{...rest}
				render={({ location }) =>
					userAuth ? (
						children
					) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location }
							}}
						/>
					)
				}
			/>
		);
	}

	return (
		<div className='App'>
			<Switch>
				{userAuth !== undefined ? (
					<>
						<Route exact path='/login'>
							<Login />
						</Route>

						<PrivateRoute exact path='/settings'>
							<Link
								style={{
									position: "absolute",
									left: "30px",
									top: "25px",
									fontSize: "1.5rem"
								}}
								to='/'
							>
								{" "}
								{`<=`}{" "}
							</Link>
							<SettingsPage />
						</PrivateRoute>

						<PrivateRoute exact path='/'>
							<Link
								style={{
									position: "absolute",
									right: "30px",
									top: "25px",
									fontSize: "1.5rem"
								}}
								to='/settings'
							>
								{"=>"}
							</Link>
							{userData ? <Expenses user={userData} /> : ""}
						</PrivateRoute>
					</>
				) : (
					""
				)}
			</Switch>
		</div>
	);
}

export default App;
