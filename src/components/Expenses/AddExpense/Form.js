import React, { useContext } from "react";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../providers/UserProvider";

import * as Formik from "formik";
import * as Yup from "yup";

import styled from "styled-components/macro";

export default function Form({ setModalVisibility }) {
	const currentUser = useContext(UserContext);
	const { displayName, uid } = currentUser;

	const handleSubmit = formValues => {
		let { name, amount } = formValues;
		amount = amount.replace(/,{1}/, ".");
		amount = parseFloat(amount);

		let timestamp = Date.now();

		const expense = {
			name,
			amount,
			displayName,
			author: {
				uid
			},
			timestamp
		};
		firestore.collection("budget").add(expense);
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.min(3, "Must be at least 3 characters")
			.max(15, "Must be no longer than 15 characters")
			.required("Required"),
		amount: Yup.string()
			// match one, positive float number separated with either a comma or a dot
			.matches(
				/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/,
				"Amount must be a number"
			)
			.max(10, "Must be no longer than 10 digits")
			.required("Required")
	});

	return (
		<Formik.Formik
			initialValues={{
				name: "",
				amount: ""
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				handleSubmit(values);
				setSubmitting(false);
				setModalVisibility(false);
			}}
		>
			{formik => (
				<StyledForm className='AddExpenset'>
					<StyledFieldsContainer>
						<label htmlFor='name' style={{ visibility: "hidden", height: "0px" }}>
							Name of the task
						</label>
						<StyledField type='text' name='name' placeholder='Nazwa' />
						<Formik.ErrorMessage
							name='name'
							render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
						/>
	
						<label
							htmlFor='amount'
							style={{ visibility: "hidden", height: "0px" }}
						>
							Name of the task
						</label>
						<StyledField type='text' name='amount' placeholder='Cena (zł)' />
						<Formik.ErrorMessage
							name='amount'
							render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
						/>
					</StyledFieldsContainer>

					<StyledInputButton
						className='create'
						type='submit'
						value='Create'
					/>
				</StyledForm>
			)}
		</Formik.Formik>
	);
}

const StyledForm = styled(Formik.Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	min-height: 15rem; 
`;

const StyledFieldsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	min-height: 50%;
`

const StyledField = styled(Formik.Field)`
	margin-bottom: 1rem;
	padding: 1rem 1rem 0.7rem 1rem;
	
	font-size: 1.25rem;
	color: rgba(0, 0, 0, 0.9);

	border: 0.5px solid green;
	border-left: 6px solid rgba(78, 151, 243, 1);
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 0px;
`;

const StyledErrorMessage = styled.div`
	color: red;
	padding-left: 1rem;
`;

const StyledInputButton = styled.input`
	width: 40%;
	align-self: flex-end;
	/* margin: 0 auto; */
	padding: 0.7rem;

	background-color: rgba(78, 151, 243, 1);
	box-shadow: 01px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	border: 3px solid rgba(78, 151, 243, 1);
	border-radius: 4px;

	font-weight: bold;
	font-size: 1.25rem;
	color: white;
`;
