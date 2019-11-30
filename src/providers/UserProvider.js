import React, { useState, useEffect, createContext } from "react";
import { auth, getUserDocument } from "../firebase";

export const UserContext = createContext();

export default function UserProvider(props) {
	const [userData, setUserData] = useState("");
	const [userAuth, setUserAuth] = useState();

	useEffect(() => {
		let unsubscribeFromAuth = null;

		(function subscribeToAuth() {
			unsubscribeFromAuth = auth.onAuthStateChanged( async userAuthStatus => {
				setUserAuth(userAuthStatus)
				const userData = await getUserDocument(userAuthStatus);
				setUserData(userData);
			});
		})();

		return () => {
			unsubscribeFromAuth();
		};
	}, []);

	return (
		<UserContext.Provider value={{userData, userAuth}}>{props.children}</UserContext.Provider>
	);
}
