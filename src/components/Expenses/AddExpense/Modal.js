import React from "react";
import ReactModal from "react-modal";
import "./ModalStyles.scss";

ReactModal.setAppElement("#root");

export default function Modal({ children, setModalVisibility }) {
	return (
		<ReactModal
			isOpen={true}
			shouldCloseOnOverlayClick={true}
			onRequestClose={() => {
				setModalVisibility(false);
			}}
			style={{
				overlay: {
					display: "flex",
					backgroundColor: "rgba(35, 25, 25, 0.7)"
				},

				content: {
					position: "sticky",
					display: "flex",
					alignSelf: "flex-end",
					justifySelf: "flexend",
					flexDirection: "column",
					// padding: "0.2rem 1.5rem 0.5rem 1.5rem",
					padding: "1.5rem",
					margin: "2rem auto",
					width: "80vw",
					borderRadius: "1.3rem",
					border: "4px solid rgba(255,255,255,1)",
					background: "#fff"
				}
			}}
		>
			{children}
		</ReactModal>
	);
}
