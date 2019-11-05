import React, { useContext } from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";
import { ExpensesContext } from "../../providers/ExpensesProvider";

import "./Expenses.scss";

const Expenses = ({ user }) => {
	const expenses = useContext(ExpensesContext);

	return (
		<section>
			<AddExpense {...user} />
			<div className='Expenses--container'>
				{expenses.map(expense => (
					<Expense {...expense} uid={user.uid} key={expense.id} />
				))}
			</div>
		</section>
	);
};
export default Expenses;
