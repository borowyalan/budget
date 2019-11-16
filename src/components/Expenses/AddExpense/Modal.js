import React from "react";
import ReactModal from "react-modal";
import "./ModalStyles.scss";

ReactModal.setAppElement("#root");

export default function Modal({
	children,
	modalVisibility,
	setModalVisibility
}) {
	return (
		<ReactModal
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
					minHeight: "14rem",
					width: "80vw",
					borderRadius: "1rem",
					border: "4px solid rgba(255,178,0,1)",
					background: "#fff"
				}
			}}
		>
			{children}
		</ReactModal>
	);
}
