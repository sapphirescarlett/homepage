import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import Skills from "../Components/Skills";
import GoHome from "../Components/GoHome";

export default function SkillsPage() {
	return (
		<div className="SkillsPage">
			<Helmet>
				<title> Skills | Sapphire Saastamoinen </title>
			</Helmet>
			<Header />
			<Skills />
			<GoHome />
		</div>
	);
}
