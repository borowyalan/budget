import React, { useContext } from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";
import DisplaySumOfExpenses from "./DisplaySumOfExpenses";
import { ExpensesContext } from "../../providers/ExpensesProvider";
import DateHeader from "./DateHeader";
import { getFormattedDate } from "../../util";

import "./Expenses.scss";

const Index = ({ user }) => {
	const expenses = useContext(ExpensesContext);
	let lastDate = "";

	return (
		<>
			<DisplaySumOfExpenses userAmount={user.userAmount}></DisplaySumOfExpenses>
			<section className='Expenses--container'>
				{expenses.map(expense => {
					const formattedDate = getFormattedDate(expense.timestamp);
					let isHeaderDisplayed = lastDate !== formattedDate;
					lastDate = formattedDate;

					return (
						<>
							{isHeaderDisplayed ? (
								<DateHeader formattedDate={formattedDate} />
							) : null}
							<Expense
								{...expense}
								currentUserUID={user.uid}
								key={expense.id}
							/>
						</>
					);
				})}
			</section>
			<AddExpense />
		</>
	);
};
export default Index;
