import React from "react";
import propTypes from "prop-types";
import { firestore } from "../../firebase";

const Expense = ({ id, name, value, stars }) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);
	const remove = () => expenseRef.delete();
	const incrementStars = () => expenseRef.update({ stars: stars + 1 });

	return (
		<article className='Post'>
			<div className='Post--content'>
				<h3>{name}</h3>
				<div>{value}</div>
				<span>stars: {stars}</span>
				<div onClick={incrementStars}>increment stars</div>
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
