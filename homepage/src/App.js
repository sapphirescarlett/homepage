import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SkillsPage from "./Pages/SkillsPage";
import PhotographyPage from "./Pages/Photography";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route path="skills" element={<SkillsPage />} />
					<Route path="skills/photography" element={<PhotographyPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
