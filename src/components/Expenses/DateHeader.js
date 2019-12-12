import React from "react";
import styled from "styled-components/macro";

export default function DateHeader({ formattedDate }) {
	return <StyledDateHeader>{formattedDate}</StyledDateHeader>;
}

const StyledDateHeader = styled.div`
	margin-top: 1.725rem;
	margin-bottom: 0.25rem;
	font-size: 1.5rem;
	font-weight: 500;

	@media only screen and (min-width: 1224px) {
		margin-top: 3.5rem;
	}
`;
