import React, { createContext, useState } from "react";

export const ModalStateContext = createContext();

export default function ModalStateProvider(props) {
	const [modalVisibility, setModalVisibility] = useState(true);

	return (
		<ModalStateContext.Provider
			value={{modalVisibility, setModalVisibility}}
		>
			{props.children}
		</ModalStateContext.Provider>
	);
}
