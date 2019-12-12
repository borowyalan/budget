import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "./providers/UserProvider";

export default function PrivateRoute({ children, ...rest }) {
	const { userAuth } = useContext(UserContext);

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
