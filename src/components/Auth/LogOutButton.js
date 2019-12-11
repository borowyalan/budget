import React from 'react'
import styled from 'styled-components/macro';
import { auth } from "../../firebase";

export default function LogOutButton() {
	const handleSignOut = () => auth.signOut();

	return (
		<StyledButton onClick={handleSignOut}>
			Log Out
		</StyledButton>
	)
}

const StyledButton = styled.button`
	display: block;
	width: 50%;
	height: 2rem;
	margin: 1rem 0;

	font-size: 0.875rem;
`
