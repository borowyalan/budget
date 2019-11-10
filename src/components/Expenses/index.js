import React, { useContext } from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";
import CurrentUser from "../Auth/CurrentUser";
import DisplaySumOfExpenses from "./DisplaySumOfExpenses";
import { ExpensesContext } from "../../providers/ExpensesProvider";

import "./Expenses.scss";

const Index = ({ user }) => {
	const expenses = useContext(ExpensesContext);

	return (
		<section>
			<DisplaySumOfExpenses userAmount={user.userAmount}></DisplaySumOfExpenses>
			<CurrentUser/>
			<div className='Expenses--container'>
				{expenses.map(expense => (
					<Expense {...expense} currentUserUID={user.uid} key={expense.id} />
				))}
			</div>
			<AddExpense />
		</section>
	);
};
export default Index;
