import { useState } from "react";

import Header from "../Components/Header";
import Skills from "../Components/Skills";

export default function SkillsPage() {
	const [currentPage, setCurrentPage] = useState("");

	function changeTitle() {
		setCurrentPage("Skills");
	}
	changeTitle();
	return (
		<div className="SkillsPage">
			<Header />
			<Skills />
		</div>
	);
}
