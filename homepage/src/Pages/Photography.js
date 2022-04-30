import { Helmet } from "react-helmet";

import GoHome from "../Components/GoHome";
import Header from "../Components/Header";
import Photos from "../Components/Photos";

export default function PhotographyPage() {
	function goBack() {
		window.location.href = "/skills";
	}

	return (
		<div className="PhotographyPage">
			<Helmet>
				<title>Photography | Sapphire Saastamoinen</title>
			</Helmet>

			<Header />

			<h1 id="sectionHeader">Photography</h1>

			<Photos />

			<button className="goBack" onClick={goBack}>
				Back To Skills
			</button>
			<br />
			<GoHome />
		</div>
	);
}
