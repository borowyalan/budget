import React, { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";
import ModalButton from "./ModalButton";

export default function Index() {
	const [modalVisibility, setModalVisibility] = useState(false);

	return (
		<div>
			{modalVisibility ? (
				<Modal setModalVisibility={setModalVisibility}>
					<Form setModalVisibility={setModalVisibility} />
				</Modal>
			) : (
				<ModalButton setModalVisibility={setModalVisibility} />
			)}
		</div>
	);
}
