import React, { useContext } from "react";
import styled from "styled-components/macro";

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
		<StyledAppContainer>
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
		</StyledAppContainer>
	);
}

export default App;

const StyledAppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	min-height: 100vh;

	// background-image: url("./assets/background.png");
	background-color: rgb(240, 240, 240);
	background-size: 65%;
	background-repeat: repeat;
`;
