import React from "react";

import CurrentUser from "./CurrentUser";
import SignIn from "./SignIn";

const Authentication = ({ user, loading }) => {
	if (loading) return null;
	return <>{user ? <CurrentUser {...user} /> : <SignIn />}</>;
};

export default Authentication;
