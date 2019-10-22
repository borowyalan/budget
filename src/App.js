import React, { useEffect, useState } from "react";
import "./App.css";

import { collectIdsAndDocs } from "./util";
import { firestore } from "./firebase";
import Expenses from "./components/Expenses/Expenses";

function App() {
	const [expensesState, setExpenses] = useState([]);

	
	useEffect(() => {
		let unsubscribe = null;
		(async function subscribeToData() {
			unsubscribe = firestore.collection("budget").onSnapshot(snapshot => {
				const expenses = snapshot.docs.map(collectIdsAndDocs);
				setExpenses(expenses);
			});
		})();
		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<div className='App'>
			<Expenses expenses={expensesState} />
		</div>
	);
}

export default App;
