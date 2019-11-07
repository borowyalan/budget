import React, { useContext } from "react";
import propTypes from "prop-types";
import { firestore } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";

import styled from "styled-components/macro";

const Expense = ({ id, name, value, displayName, timestamp, author }) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);
	const remove = () => expenseRef.delete();

	const currentUser = useContext(UserContext);

	return (
		<StyledExpense
			displayName={displayName}
			offset={"50px"}
			className='Expense'
		>
			<div className='Expense--content'>
				<h3>{name}</h3>
				<div>{value}</div>
				<div>{displayName}</div>
				{/* <div>{timestamp}</div> */}
				{/* {currentUser.uid === author.uid ? (
					<div onClick={remove}>delete</div>
				) : (
					""
				)} */}
			</div>
		</StyledExpense>
	);
};

Expense.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.number.isRequired
};

const StyledExpense = styled.article`
	width: 70vw;

	padding: 1rem 0;
	margin: ${props =>
		props.displayName === "Alan"
			? `1rem 0 1rem ${props.offset}`
			: `1rem 0 1rem -${props.offset}`};

	background-color: ${props =>
		props.displayName === "Alan"
			? `rgba(88,169,246,0.1)`
			: `rgba(246,88,88,0.1)`};

	/* border: 1.5px solid translucent; */
	border-radius: 8px;

	h3 {
		margin-top: 0;
	}
`;
export default Expense;
