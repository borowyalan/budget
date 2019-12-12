import React, { useContext } from "react";
import { firestore } from "../../firebase";
import { UserContext } from "../../providers/UserProvider";
import DeleteExpense from "./DeleteExpense";
import CurrencyFormat from "react-currency-format";

import styled from "styled-components/macro";

const Expense = ({
	id,
	name,
	amount,
	displayName,
	timestamp,
	author,
	isLoan
}) => {
	const expenseRef = firestore.collection("budget").doc(`${id}`);
	const { userData } = useContext(UserContext);

	return (
		<StyledExpense author={author} userData={userData} offset={"50px"}>
			<Content>
				<h3>{name}</h3>
				<StyledAmount
					value={amount / 100}
					displayType={"text"}
					thousandSeparator={true}
					suffix={` zł ${isLoan ? "(L)" : ""}`}
				/>
				{userData.uid === author.uid ? (
					<div>
						<DeleteExpense expenseRef={expenseRef} />
					</div>
				) : (
					""
				)}
			</Content>
		</StyledExpense>
	);
};

const StyledExpense = styled.article`
	position: relative;
	width: 80vw;

	padding: 0.5rem 0;
	margin: ${props =>
		props.author.uid === props.userData.uid
			? `0.2rem 0 1rem ${props.offset}`
			: `0.2rem 0 1rem -${props.offset}`};

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	border-radius: 6px;
	box-shadow: h3 {
		text-transform: capitalize;
	}

	font-family: "Roboto", sans-serif;

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
		left: ${props =>
			props.author.uid === props.userData.uid ? `calc(100% - 20px)` : `10px`};

		content: "";
		height: 102%;
		width: 10px;

		background-color: ${props =>
			props.author.uid === props.userData.uid
				? `rgba(59,173,250,1)`
				: `rgba(243,78,107,1)`};

		border-radius: 2px;
		border-top-right-radius: 2px;
		border-bottom-right-radius: 2px;
	}

	@media only screen and (min-width: 1224px){
		width: 35vw;
	}

`;

const Content = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyledAmount = styled(CurrencyFormat)`
	font-size: 0.875rem;
	font-weight: 400;
	margin: 5px 0;
`;

export default Expense;
