import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components/macro";

export default function Index({ expenseRef }) {
	const [modalVisibility, setModalVisibility] = useState(false);

	return (
		<div>
			{modalVisibility ? (
				<Modal setModalVisibility={setModalVisibility}>
					<h1>U sureeee biiitch?</h1>
					<StyledModalButton onClick={() => expenseRef.delete()}>yes</StyledModalButton>
					<StyledModalButton onClick={() => setModalVisibility(false)}>
						no
					</StyledModalButton>
				</Modal>
			) : (
				<StyledDeleteButton onClick={() => setModalVisibility(true)}>Delete</StyledDeleteButton>
			)}
		</div>
	);
}

const StyledModalButton = styled.button`
	width: 50%;
	height: 50%;
	padding: 0.2rem;
	margin: 0.3rem;

	font-size: 2rem;
`;

const StyledDeleteButton = styled.div`
	font-size: 0.9rem;
	color: #fe6074;
`;
