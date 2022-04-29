import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./Pages/Home";
import SkillsPage from "./Pages/SkillsPage";

function App() {
	const [currentPage, setCurrentPage] = useState();

	return (
		<div className="App">
			<Helmet>
				<title>{currentPage} | Sapphire Saastamoinen</title>
			</Helmet>
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="skills" element={<SkillsPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
