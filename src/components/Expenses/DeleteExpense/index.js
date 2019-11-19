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
					<StyledButton onClick={() => expenseRef.delete()}>yes</StyledButton>
					<StyledButton onClick={() => setModalVisibility(false)}>
						no
					</StyledButton>
				</Modal>
			) : (
				<div onClick={() => setModalVisibility(true)}>Delete</div>
			)}
		</div>
	);
}

const StyledButton = styled.button`
	width: 50%;
	height: 50%;
	padding: 0.2rem;
	margin: 0.3rem;

	font-size: 2rem;
`;
