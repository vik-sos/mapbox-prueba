import { useEffect } from "react";
import "./styles/App.css";
import mapboxgl from "mapbox-gl";

function App() {
	useEffect(() => {
		mapboxgl.accessToken =
			"pk.eyJ1Ijoia21pbG9sNGdvcyIsImEiOiJjbHFzYmh1anYxaHdjMmtvODZnNnZ0OHBjIn0.DgIo_1z0xe6B3CSTsMIo-w";
		new mapboxgl.Map({
			container: "mapa", // container ID
			style: "mapbox://styles/mapbox/streets-v12", // style URL
			center: [-74.5, 40], // starting position
			zoom: 9, // starting zoom
		});
	}, []);

	return (
		<>
			<div id="mapa"></div>
		</>
	);
}

export default App;
