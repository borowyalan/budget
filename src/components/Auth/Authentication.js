import React, { useContext } from "react";

import SignIn from "./SignIn";

import { UserContext } from "../../providers/UserProvider";

const Authentication = () => {

	const user = useContext(UserContext)

	return <>{user ? '' : <SignIn />}</>;
};

export default Authentication;
