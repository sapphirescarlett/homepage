import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import SkillsPage from "./Pages/SkillsPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route index element={<Home />} />
					<Route exact path="/skills" element={<SkillsPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
