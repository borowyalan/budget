import React from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";

import "./Expenses.scss";

const Expenses = ({ expenses, user }) => {
	
	return (
		<section>
			<AddExpense {...user} />
			<div className='Expenses--container'>
				{expenses.map(expense => (
					<Expense {...expense} key={expense.id} />
				))}
			</div>
		</section>
	);
};
export default Expenses;
