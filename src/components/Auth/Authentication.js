import React, { useContext } from "react";

import SignIn from "./SignIn";

import { UserContext } from "../../providers/UserProvider";

const Authentication = () => {

	const user = useContext(UserContext)
	console.log(user);
	

	return (
		<>
			<SignIn />}
		</>
		);
};

export default Authentication;
