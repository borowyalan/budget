import React, { useState } from "react";
import { firestore } from "../firebase";

export default function AddExpense({ id }) {
	const [expenseName, setName] = useState("");
	const [expenseValue, setValue] = useState("");

	const handleSubmit = event => {
		event.preventDefault();

		let name = expenseName;
		let value = Number(expenseValue);

		const expense = {
			name,
			value,
			stars: 0
		};
		firestore.collection("budget").add(expense);

		setName("");
		setValue("");
	};

	const handleChange = event => {
		event.target.name === "name"
			? setName(event.target.value)
			: setValue(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className='AddExpenset'>
			<input
				type='text'
				name='name'
				placeholder='Nazwa'
				value={expenseName}
				onChange={handleChange}
			/>
			<input
				type='text'
				name='value'
				placeholder='Cena'
				value={expenseValue}
				onChange={handleChange}
			/>
			<input className='create' type='submit' value='Create Expense' />
		</form>
	);
}
