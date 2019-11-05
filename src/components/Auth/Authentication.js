import React, { useContext } from "react";

import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";

import { UserContext } from "../../providers/UserProvider";

const Authentication = () => {

	const user = useContext(UserContext)

	return <>{user ? <CurrentUser {...user} /> : <SignIn />}</>;
};

export default Authentication;
