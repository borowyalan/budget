import React from "react";
import styled from "styled-components/macro";
import logo from "./plus_sign.svg";

export default function ModalButton({ setModalVisibility }) {
	return (
		<StyledPopupContainer onClick={() => setModalVisibility(true)}>
			<StyledPlusSign src={logo} alt='plus sign' />
		</StyledPopupContainer>
	);
}

const StyledPopupContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	bottom: 3vh;
	right: 10vw;

	height: 10vh;
	width: 10vh;

	border-radius: 2.5rem;
	background: rgb(59, 173, 250);
	background: rgb(243, 78, 107);
	background: rgb(243, 78, 107);
	background: linear-gradient(
		135deg,
		/* red */ rgba(243, 78, 107, 0.4) -5%,
		/* blue */ rgba(59, 173, 250, 0.4) 110%
	);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	font-size: 3rem;
`;

const StyledPlusSign = styled.img`
	width: 45%;
	height: 45%;
	filter: invert(100%);
`;
