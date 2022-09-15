import React, { useState, useEffect, useCallback } from "react";
import { Marker } from "react-mapbox-gl";
import marker from "assets/marker.png";
import styles from "./index.css";
import { geoClient, Map, style, mapStyle } from "lib/mapbox";
import { InputText } from "ui/text-field";
import { MainButton } from "ui/buttons";

type MapBoxProps = {
	onChange?: (any) => any;
};

export function MapBox(props: MapBoxProps) {
	const { onChange } = props;
	const initialCoords: any = [-68.838844, -32.888355];
	const [coords, setCoords] = useState(initialCoords);
	const [query, setQuery] = useState("");

	async function search() {
		geoClient
			.forwardGeocode({
				query: query,
				countries: ["ar"],
				limit: 2,
			})
			.send()
			.then((response) => {
				const match = response.body;
				const coordinates = match.features[0].geometry.coordinates;
				return coordinates;
			})
			.then((data) => {
				setCoords(data);
				// lo "tiro" hacia arriba para que reciban las coordenadas desde "afuera"
				if (onChange) {
					onChange({
						query: query,
						coords: data,
					});
				}
			});
	}

	function inputChangeHandler(e) {
		setQuery(e.target.value);
	}

	function keydownInputHandler(e) {
		// si no es con form, tengo que agregar esto
		if (e.key == "Enter") {
			// evito que se dispare el submit
			e.preventDefault();
			search();
		}
	}

	return (
		<div className={styles.map_container}>
			<Map
				style={style}
				containerStyle={mapStyle}
				center={coords}
				zoom={[13]}
				movingMethod='easeTo'
			>
				{/* <Layer type='symbol' id='marker' layout={{ "icon-image": "marker-15" }}>
				<Feature coordinates={coords} />
			</Layer> */}
				<Marker coordinates={coords} anchor='bottom'>
					<img src={marker} className={styles.marker} />
				</Marker>
			</Map>
			<div className={styles.map_container}>
				<InputText
					onChange={inputChangeHandler}
					onKeyDown={keydownInputHandler}
					value={query}
					label='Ubicación'
					name='query'
					type='search'
				></InputText>
				<MainButton onClick={search} type='button'>
					Buscar
				</MainButton>
			</div>
		</div>
	);
}
//otra alternativa que encontré googleando para generar la búsqueda
// const fetchData = useCallback(() => {
// 	return geoClient
// 		.forwardGeocode({
// 			query: query,
// 			countries: ["ar"],
// 			limit: 2,
// 		})
// 		.send()
// 		.then((response) => {
// 			const match = response.body
// 			const coordinates = match.features[0].geometry.coordinates;
// 			return {
// 				geometry: {
// 					type: "Point",
// 					coordinates: coordinates,
// 				},
// 			};
// 		});
// }, []);
// useEffect(() => {
// 	const results = fetchData();
// 	results.then((marker) => {
// 		setCoords(marker.geometry.coordinates);
// 	});
// }, [fetchData]);
