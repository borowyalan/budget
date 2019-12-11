import React from "react";
import projectInfo from "../../../package.json";

export default function index() {
	return (
		<div style={{ display: "flex", marginTop: "20vh", width: "75%" }}>
			<div>Budget - version {projectInfo.version}</div>
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
