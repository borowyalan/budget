import React, { useContext } from "react";
import propTypes from "prop-types";
import { firestore } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import DeleteExpense from "./DeleteExpense";

import styled from "styled-components/macro";

const Expense = ({ id, name, amount, displayName, timestamp, author }) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);

	const remove = () => {};

	const currentUser = useContext(UserContext);

	return (
		<StyledExpense displayName={displayName} offset={"50px"}>
			{/* <ColoredBar /> */}
			<Content>
				<h3>{name}</h3>
				<h4>{amount} zł</h4>
				{/* {currentUser.uid === author.uid ? (
					<div onClick={remove}>
						<DeleteExpense expenseRef={expenseRef} />
					</div>
				) : (
					""
				)} */}
			</Content>
		</StyledExpense>
	);
};

const StyledExpense = styled.article`
	position: relative;
	width: 80vw;

	padding: 0.5rem 0;
	margin: ${props =>
		props.displayName === "Alan"
			? `0.2rem 0 1rem ${props.offset}`
			: `0.2rem 0 1rem -${props.offset}`};

	background-color: ${props =>
		props.displayName === "Alan"
			? `rgba(255,255,255,1)`
			: `rgba(255,255,255,1)`};

	/* border: ${props =>
		props.displayName === "Alan"
			? `1px solid rgba(10,93,238,0.34)`
			: `1px solid rgba(210,93,86,0.45)`}; */

	box-shadow: ${props =>
		props.displayName === "Alan"
			? `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);`
			: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`};

	border-radius: 6px;
	box-shadow: h3 {
		text-transform: capitalize;
	}
	
	font-family: 'Roboto', sans-serif;

	h3 {
		font-size: 1.25rem;
		font-weight: 500;
		margin: 10px 0 0 0;
	} 

	h4 {
		font-size: 0.875rem;
		font-weight: 400;
		margin: 5px 0;
	}

	&:before {
		position: absolute;
		top: -1%;
		left: ${props => (props.displayName === "Alan" ? `calc(100% - 20px)` : `10px`)};

		content: '';
		height: 102%;
		width: 10px;

		background-color: ${props =>
			props.displayName === "Alan"
				? `rgba(59,173,250,1)`
				: `rgba(243,78,107,1)`};
			
		border-radius: 2px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}
`;

const Content = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const ColoredBar = styled.div`
	height: 100%;
	width: 5px;
	background-color: red;

	position: relative;
	top: 0;
	left: 5px;
`;

export default Expense;
