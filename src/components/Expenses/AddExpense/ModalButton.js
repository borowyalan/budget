import React from "react";
import styled from "styled-components/macro";
import logo from "./plus_sign.svg";

export default function ModalButton({ setModalVisibility }) {
	return (
		<PopupContainer onClick={() => setModalVisibility(true)}>
			<img src={logo} alt='plus sign' />
		</PopupContainer>
	);
}

const PopupContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	bottom: 7vh;
	right: 10vw;

	height: 10vh;
	width: 10vh;

	border: solid 4px rgba(255, 178, 0, 1);
	border-radius: 2.5rem;
	background-color: white;
	font-size: 3rem;

	z-index: 9000;

	img {
		width: 45%;
		height: 45%;
	}
`;