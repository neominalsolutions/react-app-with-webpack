import React, { useEffect, useState } from 'react';

import * as cityJson from './data/city.json';

export interface City {
	name: string; // istanbul, text, name
	code: number; // 34, value
	states: State[]; // şehirin ilçeleri
}

export interface State {
	name: string; // Üsküdar
	postalCode: number; // 34400
}

function UseEffectDropDownSample() {
	const [selectedCity, setSelectedCity] = useState<number>();
	const [states, setStates] = useState<State[]>([]);
	const [cities, setCities] = useState<City[]>([]);

	console.log('cityJson', cityJson);

	// let cities: City[] = [];

	useEffect(() => {
		// cities = cityJson.default as City[];
		console.log('cities load', cities);
		// FROM API
		setCities(cityJson.default as City[]);
	}, []);

	let selectedCityStates: State[] = [];

	useEffect(() => {
		console.log('selectedCity', selectedCity);
		if (selectedCity !== undefined) {
			const city = cities.find((x) => x.code === selectedCity);
			setStates([...(city?.states as State[])]);
		}
	}, [selectedCity]);

	console.log('selectedCityStates', selectedCityStates);

	return (
		<>
			<select
				onChange={(e: any) => {
					console.log('e.target.value', e.target.value);
					setSelectedCity(Number(e.target.value));
				}}
			>
				{cities.map((city: City, index: number) => {
					return (
						<option value={city.code} key={index}>
							{city.name}
						</option>
					);
				})}
			</select>
			Seçilen Sehir: {selectedCity}
			<br></br>
			{selectedCity && (
				<select>
					{states.map((state: State, index: number) => {
						return (
							<option value={state.postalCode} key={index}>
								{state.name}
							</option>
						);
					})}
				</select>
			)}
		</>
	);
}

export default UseEffectDropDownSample;
