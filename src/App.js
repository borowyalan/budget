import React, { useEffect, useState } from "react";
import { collectIdsAndDocs } from "./util";
import "./App.scss";

import { firestore } from "./firebase";
import ExpensesScreen from "./components/ExpensesScreen/Expenses";

import { auth, getUserDocument } from "./firebase";
import Authentication from "./components/Auth/Authentication";

function App() {
	const [expensesState, setExpenses] = useState([]);
	const [user, setUser] = useState("");

	useEffect(() => {
		let unsubscribeFromFirestore = null;

		(async function subscribeToFirestore() {
			unsubscribeFromFirestore = await firestore
				.collection("budget")
				.onSnapshot(snapshot => {
					const expenses = snapshot.docs.map(collectIdsAndDocs);
					setExpenses(expenses);
				});
		})();
		(function subscribeToAuth() {
			auth.onAuthStateChanged(async userAuth => {
				const user = await getUserDocument(userAuth)
				setUser(user)
			});
		})();

		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<div className='App'>
			<Authentication user={user} />
			{user ? <ExpensesScreen user={user} expenses={expensesState} /> : ""}
		</div>
	);
}

export default App;
