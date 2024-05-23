import React, { useRef, useState } from 'react';

// NOT: useRef hook ile elementlerin domadaki referansları üzerinden haberleşerek hiç state mekanizmasına bulaşmadan html elementler ile çalışabilir veya bir değişkenin değerini render boyunca koruyabiliriz.

function UseRefSample() {
	const renderCount = useRef<number>(0);
	// useRef ile yapılan işlemler virtual domda bir güncelleme yapmıyor.
	const [random, setRandom] = useState<number>(0);

	return (
		<>
			Kaç Kez Render aldık: {renderCount.current}
			<br></br>
			<button
				onClick={() => {
					renderCount.current = renderCount.current + 1;
					console.log('counter', renderCount);
					setRandom(Math.round(Math.random() * 1000));
				}}
			>
				(+)
			</button>
		</>
	);
}

export default UseRefSample;
