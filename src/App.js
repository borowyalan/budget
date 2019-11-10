import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/Expenses";
import Authentication from "./components/Auth/Authentication";
import { UserContext } from "./providers/UserProvider";

function App() {
	const user = useContext(UserContext);

	return (
		<div className='App'>
			{user ? <Expenses user={user} /> : <Authentication />}
		</div>
	);
}

export default App;
