import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/Expenses";
import Authentication from "./components/Auth/Authentication";
import { UserContext } from "./providers/UserProvider";

function App() {
	const user = useContext(UserContext);

	console.log(user);

	return (
		<div className='App'>
			{user ? (
				<Expenses user={user} />
			) : user === undefined ? (
				<Authentication />
			) : (
				""
			)}
		</div>
	);
}

export default App;
