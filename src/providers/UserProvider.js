import React, { useState, useEffect, createContext } from "react";
import { auth, getUserDocument } from "../firebase";
import { useHistory } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider(props) {
	const [user, setUser] = useState("");
	let history = useHistory();

	useEffect(() => {
		let unsubscribeFromAuth = null;

		(function subscribeToAuth() {
			unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
				const user = await getUserDocument(userAuth);
				setUser(user);
				history.push("/");
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
