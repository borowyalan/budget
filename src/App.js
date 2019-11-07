import React, { useContext } from "react";
import "./App.scss";

import Expenses from "./components/ExpensesScreen/Expenses";
import AddExpense from "./components/ExpensesScreen/AddExpense/";
import Authentication from "./components/Auth/Authentication";
import { UserContext } from "./providers/UserProvider";

function App() {
	const user = useContext(UserContext);

	return (
		<div className='App'>
			<Authentication />
			{user ? <Expenses user={user} /> : ""}
			{user ? <AddExpense></AddExpense> : ""}
		</div>
	);
}

export default App;
