import React, { useContext } from "react";
import { auth } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";

const CurrentUser = props => {
	const handleSignOut = () => auth.signOut();

	const user = useContext(UserContext);
	const { displayName, email } = user;

	return (
		<section className='CurrentUser'>
			<div className='CurrentUser--information'>
				<span className='displayNamew'>{displayName}</span>
				<button onClick={handleSignOut}>Sign Out</button>
			</div>
		</section>
	);
};

CurrentUser.defaultProps = {
	displayName: "Bill Murray",
	email: "billmurray@mailinator.com",
	photoURL: "https://www.fillmurray.com/300/300",
	createdAt: new Date()
};

export default CurrentUser;
