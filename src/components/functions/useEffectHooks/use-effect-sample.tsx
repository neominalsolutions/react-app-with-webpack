import React, { useEffect, useState } from 'react';

// componentDidMount
// componentDidUpdate
// componentWillMount
/* useEffect(() => {
		// asenkron olarak yapılacak işlemler ve state takibi

        // clean up function // Component Willunmount
        return () => {
                // domdan çıkışta yapılacak olan işlemler
                // socket terminate
                // request terminate
                // timer, interval clear
                // unsubscription
        }
	}, []); 
    */
// [], [state1,state2,state3] // bu component doma girdiğinde hangi stateler üzerinden tekrar useEffect hook çalışsın diye tanımlama yaptığımız kısım
// [] boş deps ile çalışırken 1 kereye mahsus doma giriş yapar. component domdan çıkana kadar sadece 1 kere çalışır.
// Bir component içerisinde useEffect hook birden fazla kez tanımlanabilir.

function UseEffectSample() {
	const [counter, setCounter] = useState<number>(0);
	const [random, setRandom] = useState<number>(0);

	// Dependecy Yok, sakıncalı bir kullanım
	// bütün state değişimşlerinde otomatik tetiklenir.
	useEffect(() => {
		console.log('her bir işlemde tetiklenir');
	});

	// sayfa ilk doma basıldığında 1 kez tetiklenir.
	useEffect(() => {
		console.log('Boş dependency');
	}, []);

	// sayfa ilk doma basıldığında ve takip edilen deps [counter] çalışır.
	useEffect(() => {
		if (counter > 0) {
			console.log('counter değişti');
		}
	}, [counter]);

	useEffect(() => {
		if (counter > 0 || random > 0) {
			console.log('hem counter hemde random dan biri değiştinde tetiklen');
		}
	}, [counter, random]);

	return (
		<>
			<button onClick={() => setRandom(Math.round(Math.random() * 1000))}>
				Rastgele Sayı
			</button>
			<p>Sayac: {counter}</p>
			<p>Random: {random}</p>
			<button onClick={() => setCounter(counter + 1)}>(+)</button>
			<button onClick={() => setCounter(0)}>Reset</button>
		</>
	);
}

export default UseEffectSample;
