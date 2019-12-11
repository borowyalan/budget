import React from "react";
import projectInfo from "../../../package.json";

import LogOutButton from '../Auth/LogOutButton'

export default function index() {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "20vh", width: "75%" }}>
			<div>Budget - version {projectInfo.version}</div>
			<LogOutButton/>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)"
				}}
			>
				Come here soon for more
				<br /> (∩◉ω◉ )⊃----★
			</div>
		</div>
	);
}
