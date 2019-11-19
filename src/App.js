import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/Expenses";
import Login from "./components/Auth/Login";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
	const user = useContext(UserContext);

	function PrivateRoute({ children, ...rest }) {
		return (
			<Route
				{...rest}
				render={({ location }) =>
					user ? (
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
				<Route path='/login'>
					{user === undefined ? <Login /> : ""}
				</Route>
				<PrivateRoute path='/'>
					<Expenses user={user} />
				</PrivateRoute>
			</Switch>
		</div>
	);
}

export default App;
