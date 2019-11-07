import React, { useState, useContext } from "react";
import { firestore } from "../../../firebase";
import ReactModal from "react-modal";
import { UserContext } from "../../../providers/UserProvider";
import { ModalStateContext } from "../../../providers/ModalStateProvider";
import './ModalStyles.scss'

import styled from "styled-components/macro";

export default function Modal() {
	const currentUser = useContext(UserContext);
	const { modalVisibility, setModalVisibility } = useContext(ModalStateContext);

	const [expenseName, setName] = useState("");
	const [expenseValue, setValue] = useState("");

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
		<ModalWrapper>
			<StyledModal
				isOpen={modalVisibility}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => {
					setModalVisibility(false);
				}}
				style={{
					overlay: {
						display: "flex",
						backgroundColor: "rgba(255, 255, 255, 0.7)"
					},

					content: {
						position: "sticky",
						display: "flex",
						alignSelf: "flex-end",
						justifySelf: "flexend",
						flexDirection: "column",
						padding: "0.5rem",
						margin: "5rem auto",
						height: "14rem",
						width: "80vw",
						borderRadius: "1rem",
						border: "4px solid rgba(255,178,0,1)",
						background: "#fff"
					}
				}}
			>
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
			</StyledModal>
		</ModalWrapper>
	);
}
	const ModalWrapper = styled.div`
		.ReactModelOverlay.ReactModalOverlay-open {
			background-color: red;
		}
	`;

	const StyledModal = styled(ReactModal)`
		.ReactModalOverlay-open {
			background-color: red;
		}
	`;

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
