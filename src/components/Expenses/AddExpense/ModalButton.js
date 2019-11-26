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

	border: solid 0.1px black;
	border-radius: 2.5rem;
	background-color: white;
	font-size: 3rem;
`;

const StyledPlusSign = styled.img`
	width: 45%;
	height: 45%;
	filter: invert(100%);
`;
