import React, { useState, useEffect, createContext } from "react";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../util";

export const UsersAmountsContext = createContext();

export default function UsersAmountsProvider(props) {
	const [usersAmounts, setUsersAmounts] = useState("");

	useEffect(() => {
		let unsubscribeFromFirestore = null;

		(async function subscribeToFirestore() {
			unsubscribeFromFirestore = await firestore
				.collection("users")
				.onSnapshot(snapshot => {
					const usersAmounts = snapshot.docs.map(collectIdsAndDocs);
					
					setUsersAmounts(usersAmounts);
				});
		})();

		return () => {
			unsubscribeFromFirestore();
		};
	}, []);

	return (
		<UsersAmountsContext.Provider value={usersAmounts}>{props.children}</UsersAmountsContext.Provider>
	);
}
