export default function Photos() {
	return (
		<div className="PhotosContainer">
			<h2 id="subSectionHeader">Examples of my photos</h2>
			<div id="examplePhotos">
				<img
					id="morkkiPhoto"
					className="examplePhoto"
					src={require("../Pictures/morkki.jpg")}
					alt="One of my cats"
				/>
				<br />
				<img
					id="redRosePhoto"
					className="examplePhoto"
					src={require("../Pictures/red_rose.jpg")}
					alt="A close up of a red rose"
				/>
				<br />
				<img
					id="fireplacePhoto"
					className="examplePhoto"
					src={require("../Pictures/fireplace.jpg")}
					alt="A flame in a fireplace"
				/>
				<br />
				<img
					id="whiteFlowerPhoto"
					className="examplePhoto"
					src={require("../Pictures/white_flower.jpg")}
					alt="One of my cats"
				/>
			</div>
			{/* .examplePhotos */}
		</div> // .PhotosContainer
	);
}
