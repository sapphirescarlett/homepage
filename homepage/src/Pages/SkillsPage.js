import { Helmet } from "react-helmet";

import Header from "../Components/Header";
import Skills from "../Components/Skills";

export default function SkillsPage() {
	return (
		<div className="SkillsPage">
<Helmet>
<title> Skills | Avery Saastamoinen </title>
</Helmet>
			<Header />
			<Skills />
		</div>
	);
}
