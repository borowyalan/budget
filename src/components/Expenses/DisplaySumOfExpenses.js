import React, { useContext } from "react";
import styled from "styled-components/macro";
import { ExpensesContext } from "../../providers/ExpensesProvider";

const DisplaySumOfExpenses = () => {
	const expenses = useContext(ExpensesContext);

	let KarolExpenses = expenses
		.filter(expense => {
			return expense.displayName === "Karol"
		})
		.reduce((acc, currentValue) => {
			return currentValue.isLoan 
				? acc + currentValue.amount * 2 
				: acc + currentValue.amount;
		}, 0);

	let AlanExpenses = expenses
		.filter(expense => expense.displayName === "Alan")
		.reduce((acc, currentValue) => {
			return currentValue.isLoan 
				? acc + currentValue.amount * 2 
				: acc + currentValue.amount;
		}, 0);

	//sort descending by userAmount
	const sortedUsers = [
		{ name: "Alan", amount: AlanExpenses },
		{ name: "Karol", amount: KarolExpenses }
	].sort((a, b) => b.userAmount - a.userAmount);

	return (
		<BalanceSection>
			<div>
				{sortedUsers[0].name}: {sortedUsers[0].amount / 100}
			</div>
			<div>
				{sortedUsers[1].name}: {sortedUsers[1].amount / 100}
			</div>
			<Divider />
			<div>
				Balance: {(sortedUsers[0].amount - sortedUsers[1].amount) / 100}
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
`;

export default DisplaySumOfExpenses;
