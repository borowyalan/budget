import React, { useEffect, useState } from "react";
import "./App.scss";

import Expenses from "./components/ExpensesScreen/Expenses";

import { auth, getUserDocument } from "./firebase";
import Authentication from "./components/Auth/Authentication";

function App() {
	const [user, setUser] = useState("");

	useEffect(() => {
		let unsubscribeFromAuth = null;

		(function subscribeToAuth() {
			unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
				const user = await getUserDocument(userAuth);
				setUser(user);
			});
		})();

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<div className='App'>
			<Authentication user={user} />
			{user ? <Expenses user={user} /> : ""}
		</div>
	);
}

export default App;
