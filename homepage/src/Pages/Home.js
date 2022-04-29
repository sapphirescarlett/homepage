import { useState } from "react";

import Header from "../Components/Header";
import Skills from "../Components/Skills";

import { ReactComponent as GithubLogo } from "../Icons/GitHub.svg";

export default function Home() {
	const [currentPage, setCurrentPage] = useState();

	setCurrentPage("Home");

	return (
		<div className="Home">
			<Header />

			<div className="About">
				<img className="me" src={require("../Pictures/me.jpg")} alt="" />
				<br />
				<a href="https://github.com/averynova">
					<GithubLogo className="GitHubLogo" />
				</a>
			</div>

			<Skills />
		</div>
	);
}
