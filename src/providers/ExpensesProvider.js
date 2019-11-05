import React, { createContext, useState, useEffect } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../util";

export const ExpensesContext = createContext();

export default function ExpensesProvider(props) {
	const [expensesState, setExpenses] = useState([]);

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

		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<ExpensesContext.Provider value={expensesState}>
			{props.children}
		</ExpensesContext.Provider>
	);
}
