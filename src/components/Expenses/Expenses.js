import React from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";

const Expenses = ({ expenses }) => {
	return (
		<section>
			<AddExpense />
			{expenses.map(expense => (
				<Expense {...expense} key={expense.id} />
			))}
		</section>
	);
};
export default Expenses;
