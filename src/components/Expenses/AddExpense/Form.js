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
			// match one, positive float number separated with either comma or
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
					<label htmlFor='name' style={{ visibility: "hidden" }}>
						Name of the task
					</label>
					<StyledField type='text' name='name' placeholder='Nazwa' />
					<Formik.ErrorMessage
						name='name'
						render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
					/>

					<label htmlFor='amount' style={{ visibility: "hidden" }}>
						Name of the task
					</label>
					<StyledField type='text' name='amount' placeholder='Cena' />
					<Formik.ErrorMessage
						name='amount'
						render={msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
					/>

					<StyledInputButton
						className='create'
						type='submit'
						value='Create Expense'
					/>
				</StyledForm>
			)}
		</Formik.Formik>
	);
}

const StyledForm = styled(Formik.Form)`
	display: flex;
	flex-direction: column;
`;

const StyledField = styled(Formik.Field)`
	font-size: 2rem;
	padding: 1rem;
	padding-bottom: 0;
	border: none;
	border-bottom: 1px solid gray;
`;

const StyledErrorMessage = styled.div`
	color: red;
	padding-left: 1rem;
`;

const StyledInputButton = styled.input`
	margin-top: 1.5rem;
	padding: 1rem;
	border-radius: 1rem;
	font-size: 1.5rem;
`;
