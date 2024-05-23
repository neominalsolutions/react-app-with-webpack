// Vucut Kitlen Endeksi Hesaplama

import React, { useEffect, useRef, useState } from 'react';

function BodyMassIndex() {
	// 1. örnek için kullanıldı
	//const [weight, setWeight] = useState<number>(1); // kg
	// const [height, setHeight] = useState<number>(1); // cm
	// const [bmiValue, setBmiValue] = useState<number>(0);
	// const bmi = useRef(0);

	const weightInput = useRef<HTMLInputElement>(null);
	const heightInput = useRef<HTMLInputElement>(null);
	// documentGetElementById(); benzer bir şekilde domdaki refe erişilir.

	useEffect(() => {
		weightInput.current?.focus();
		if (heightInput.current) {
			heightInput.current.style.backgroundColor = 'red';
			heightInput.current.style.color = 'yellow';
		}
	}, []);

	// let bmi = 0;

	// 1. örnek için kullandık
	// useEffect(() => {
	// 	const h = height / 100;
	// 	bmi.current = weight / (h * h);

	// 	// setBmiValue(weight / (h * h));
	// }, [weight, height]);

	// 2. örnek için kullandık
	const calculateBodyMassIndex = () => {
		const h = Number(heightInput.current?.value) / 100;
		const result = Number(weightInput.current?.value) / (h * h);

		if (heightInput.current) {
			heightInput.current.value = '';
		}

		if (weightInput.current) {
			weightInput.current.value = '';
		}

		alert('vki' + result);
	};

	return (
		<>
			Body Mass Index Ref : <br></br>
			{/* Body Mass State: {bmiValue} */}
			<hr></hr>
			<label>Kilo</label>
			<input ref={weightInput} placeholder="kilo kg" />
			<br></br>
			<label>Boy</label>
			<input ref={heightInput} placeholder="Boy cm" />
			<br></br>
			<button onClick={calculateBodyMassIndex}>Hesapla</button>
		</>
	);

	/*
	return (
		<>
			Body Mass Index Ref : {bmi.current}
			<br></br>
			{ Body Mass State: {bmiValue}}
			<hr></hr>
			<label>Kilo</label>
			<input
				placeholder="kilo kg"
				value={weight}
				onChange={(e: any) => {
					setWeight(Number(e.target.value));
				}}
			/>
			<br></br>
			<label>Boy</label>
			<input
				placeholder="Boy cm"
				value={height}
				onChange={(e: any) => {
					setHeight(Number(e.target.value));
				}}
			/>
			<br></br>
			
		</>
	);

    */
}

export default BodyMassIndex;
