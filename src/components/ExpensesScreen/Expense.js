import React, { useContext } from "react";
import propTypes from "prop-types";
import { firestore } from "../../firebase";

import "./Expense.scss";
import { UserContext } from "../../providers/UserProvider";

const Expense = ({ id, name, value, displayName, timestamp, author }) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);
	const remove = () => expenseRef.delete();

	const currentUser = useContext(UserContext);

	return (
		<article className='Expense'>
			<div className='Expense--content'>
				<h3>{name}</h3>
				<div>{value}</div>
				<div>{displayName}</div>
				<div>{timestamp}</div>
				{currentUser.uid === author.uid ? (
					<div onClick={remove}>delete</div>
				) : (
					""
				)}
			</div>
		</article>
	);
};

Expense.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.number.isRequired
};
export default Expense;
