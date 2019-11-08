import React, { useState, useContext } from "react";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../providers/UserProvider";
import { ModalStateContext } from "../../../providers/ModalStateProvider";

import styled from "styled-components/macro";

export default function Form() {
	const [expenseName, setName] = useState("");
	const [expenseValue, setValue] = useState("");
	
	const { setModalVisibility } = useContext(ModalStateContext);
	const currentUser = useContext(UserContext);
	const { displayName, uid } = currentUser;

	const handleSubmit = event => {
		event.preventDefault();

		let name = expenseName;
		let value = Number(expenseValue);
		let timestamp = Date.now();

		const expense = {
			name,
			value,
			displayName,
			author: {
				uid
			},
			timestamp
		};
		firestore.collection("budget").add(expense);

		setName("");
		setValue("");
		setModalVisibility(false);
	};

	const handleChange = event => {
		event.target.name === "name"
			? setName(event.target.value)
			: setValue(event.target.value);
	};
	return (
		<StyledForm onSubmit={handleSubmit} className='AddExpenset'>
			<StyledInput
				type='text'
				name='name'
				placeholder='Nazwa'
				value={expenseName}
				onChange={handleChange}
			/>
			<StyledInput
				type='text'
				name='value'
				placeholder='Cena'
				value={expenseValue}
				onChange={handleChange}
			/>
			<StyledInputButton
				className='create'
				type='submit'
				value='Create Expense'
			/>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const StyledInput = styled.input`
	font-size: 2rem;
	padding: 1rem;
	padding-bottom: 0;
	border: none;
	border-bottom: 1px solid gray;
`;

const StyledInputButton = styled.input`
	margin-top: 1.5rem;
	padding: 1rem;
	border-radius: 1rem;
	font-size: 1.5rem;
`;
