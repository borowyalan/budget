import React from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";

import "./Expenses.scss"

const Expenses = ({ expenses, username }) => {
	console.log(username);

	return (
		<section>
			<AddExpense username={username} />
			<div className='Expenses--container'>
				{expenses.map(expense => (
					<Expense {...expense} key={expense.id} />
				))}
			</div>
		</section>
	);
};
export default Expenses;
