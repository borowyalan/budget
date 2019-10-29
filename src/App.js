import React, { useEffect, useState } from "react";
import { collectIdsAndDocs } from "./util";
import "./App.scss";

import { firestore } from "./firebase";
import Expenses from "./components/Expenses/Expenses";

import { auth } from "./firebase";
import Authentication from "./components/Auth/Authentication";
import usernames from "./components/Auth/usernames";

function App() {
	const [expensesState, setExpenses] = useState([]);
	const [userAuth, setUser] = useState("");
	const [username, setUsername] = useState("d");

	useEffect(() => {
		let unsubscribeFromFirestore = null;

		(async function subscribeToFirestore() {
			unsubscribeFromFirestore = await firestore
				.collection("budget")
				// .where('username', '==', 'Karol')
				.onSnapshot(snapshot => {
					const expenses = snapshot.docs.map(collectIdsAndDocs);
					setExpenses(expenses);
				});
		})();
		(async function subscribeToAuth() {
			auth.onAuthStateChanged(user => {
				if (user) {
					setUsername(usernames[user.email]);
				}
				setUser(user);
			});
		})();

		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<div className='App'>
			<Authentication user={userAuth} />
			{userAuth ? (
				<Expenses username={username} expenses={expensesState} />
			) : (
				""
			)}
		</div>
	);
}

export default App;
