import React, { useState, useEffect, createContext } from "react";
import { auth, getUserDocument } from "../firebase";

export const UserContext = createContext();

export default function UserProvider(props) {
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
		<UserContext.Provider value={user}>{props.children}</UserContext.Provider>
	);
}
