import React, { useContext } from "react";
import Expense from "./Expense";
import { ExpensesContext } from "../../providers/ExpensesProvider";

import "./Expenses.scss";

const Expenses = ({ user }) => {
	const expenses = useContext(ExpensesContext);

	return (
		<section>
			{/* <AddExpense {...user} /> */}
			<div className='Expenses--container'>
				{expenses.map(expense => (
					<Expense {...expense} currentUserUID={user.uid} key={expense.id} />
				))}
			</div>
		</section>
	);
};
export default Expenses;
