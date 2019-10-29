import React from "react";
import { auth } from "../../firebase";

const CurrentUser = ({ email, children }) => {
	const handleSignOut = () => auth.signOut();

	return (
		<section className='CurrentUser'>
			<div className='CurrentUser--profile'>
				<div className='CurrentUser--information'>
					<p className='email'>{email}</p>
				</div>
			</div>
			<div>
				<div>{children}</div>
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
