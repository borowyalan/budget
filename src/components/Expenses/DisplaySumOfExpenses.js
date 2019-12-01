import React, { useContext } from "react";
import { UsersAmountsContext } from "../../providers/UsersAmountsProvider";
import styled from "styled-components/macro";
import _round from 'lodash/round'

const DisplaySumOfExpenses = () => {
	const usersObjects = useContext(UsersAmountsContext);

	//sort descending by userAmount
	const sortedUsers = usersObjects.sort((a, b) => b.userAmount - a.userAmount);

	return (
		<BalanceSection>
			<div>
				{sortedUsers[0].displayName}: {sortedUsers[0].userAmount}
			</div>
			<div>
				{sortedUsers[1].displayName}: {sortedUsers[1].userAmount}
			</div>
			<Divider/>
			<div>
				Balance: {_round(sortedUsers[0].userAmount - sortedUsers[1].userAmount, 2)}
			</div>
		</BalanceSection>
	);
};

const BalanceSection = styled.section`
	display: flex;
	flex-direction: column;
	align-self: center;
	align-items: baseline;
	padding-top: 1rem;
	margin: auto;
	text-align: unset;
`;

const Divider = styled.hr`
	width: 100%;
`

export default DisplaySumOfExpenses;
