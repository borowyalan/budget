import React, { useContext } from "react";

import SignIn from "./SignIn";

import { UserContext } from "../../providers/UserProvider";

const Authentication = () => {

	const user = useContext(UserContext)

	return (
		<>
			<SignIn />
		</>
		);
};

export default Authentication;
