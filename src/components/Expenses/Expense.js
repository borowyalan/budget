import React from "react";
import propTypes from "prop-types";
import { firestore } from "../../firebase";

import "./Expense.scss"

const Expense = ({ id, name, value, username, timestamp}) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);
	const remove = () => expenseRef.delete();

	return (
		<article className='Expense'>
			<div className='Expense--content'>
				<h3>{name}</h3>
				<div>{value}</div>
				<div>{username}</div>
				<div>{timestamp}</div>
				<div onClick={remove}>delete</div>
			</div>
		</article>
	);
};

Expense.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.number.isRequired
};
export default Expense;
