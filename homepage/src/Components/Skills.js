function Skills() {
	return (
		<div className="Skills">
			<h1 id="Header2">My Skills</h1>

			<h1 id="sectionHeader">My technical skills</h1>

			<div className="skillsList">
				<h2 id="subSectionHeader">Programming</h2>
				<p>HTML</p>
				<p>CSS</p>
				<p>JavaScript</p>
				<p>
					<a href="https://reactjs.org">React.JS JavaScript framework</a>
				</p>

				<p>
					<a href="https://netlify.com">Netlify</a> CD (<b>C</b>ontinuous
					<b>D</b>eployment)
				</p>
				<h2 id="subSectionHeader">Other technical skills</h2>
				<p>Photo- and videography</p>
				<p>Photo- and video editing</p>
			</div>
			<h1 id="sectionHeader">My other skills</h1>

			<p>
				Emergency first aid <br /> (
				<a
					href="https://ensiapukoulutus.fi/hataensiapukurssi/"
					target="_blank"
					rel="noreferrer"
				>
					contents of the Red Cross 4h emergency first aid course
				</a>
				)
			</p>

			<p>First aid fire extinguishing </p>
		</div>
	); //Skills.return
} // Skills

export default Skills;
