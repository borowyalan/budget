import React from "react";
import projectInfo from "../../../package.json";
import LogOutButton from "../Auth/LogOutButton";
import styled from "styled-components/macro";

export default function index() {
	return (
		<StyledSettingsContainer>
			<div>Budget - version {projectInfo.version}</div>
			<LogOutButton />
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
		</StyledSettingsContainer>
	);
}

const StyledSettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	align-items: flex-start;
	margin-top: 20vh;
	margin-left: 10vw;
`;
