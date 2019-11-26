import React, { useContext } from "react";
import { UsersAmountsContext } from "../../providers/UsersAmountsProvider";


const DisplaySumOfExpenses = () => {
	const usersAmounts = useContext(UsersAmountsContext);

	return (
		<section style={{ height: "50px", paddingTop: "1rem" }}>
			<div>
				{usersAmounts[0].displayName}, {usersAmounts[0].userAmount}
			</div>
			<div>
				{usersAmounts[1].displayName}, {usersAmounts[1].userAmount}
			</div>
		</section>
	);
};

export default DisplaySumOfExpenses;
