import React, { useContext } from "react";
import styled from "styled-components/macro";

import Expenses from "./components/Expenses";
import Login from "./components/Auth/Login";
import SettingsPage from "./components/SettingsPage";
import { UserContext } from "./providers/UserProvider";
import { Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

function App() {
	const { userData, userAuth } = useContext(UserContext);

	return (
		<StyledAppContainer>
			<Switch>
				{userAuth !== undefined ? (
					<>
						<Route exact path='/login'>
							<Login />
						</Route>

						<PrivateRoute exact path='/settings'>
							<StyledLink to='/'> {`<=`} </StyledLink>
							<SettingsPage />
						</PrivateRoute>

						<PrivateRoute exact path='/'>
							<StyledLink to='/settings'>{"=>"}</StyledLink>
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

	background-image: url("./assets/background.png");
	background-color: rgb(240, 240, 240);
	background-size: 65%;
	background-repeat: repeat;
`;

const StyledLink = styled(Link)`
	position: absolute;
	${props => (props.to === "/" ? "left: 30px" : "right: 30px")};
	top: 25px;
	font-size: 1.5rem;
`;
