export default function GoHome() {
	function goHome() {
		window.location.href = "/";
	}

	return (
		<button className="goHome" onClick={goHome}>
			Back Home
		</button>
	);
}
