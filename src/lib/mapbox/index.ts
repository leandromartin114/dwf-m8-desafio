import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import mbxClient from "@mapbox/mapbox-sdk";
const baseClient = mbxClient({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});
const geoClient = mbxGeocoding(baseClient);

const Map = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});
const style = "mapbox://styles/mapbox/streets-v9";
const mapStyle = {
	height: "350px",
	width: "100%",
};
export { geoClient, Map, style, mapStyle };
