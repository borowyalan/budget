import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/Expenses";
import Login from "./components/Auth/Login";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route, Redirect } from "react-router-dom";

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
				{userAuth !== undefined  ? (
					<>
						<Route exact path='/login'>
							<Login />
						</Route>
						<PrivateRoute exact path='/'>
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
