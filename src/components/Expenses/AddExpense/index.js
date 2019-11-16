import React, { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import ModalButton from "./ModalButton";

export default function Index() {
	const [modalVisibility, setModalVisibility] = useState(false);

	return (
		<div>
			<Modal
				setModalVisibility={setModalVisibility}
				modalVisibility={modalVisibility}
			>
				<Form setModalVisibility={setModalVisibility} />
			</Modal>
			<ModalButton
				modalVisibility={modalVisibility}
				setModalVisibility={setModalVisibility}
			/>
		</div>
	);
}
