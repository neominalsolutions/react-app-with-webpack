import React, { useState } from 'react';

// { counterInit = 10 }: any

type CounterProps = {
	counterInit?: number;
};

function CounterSample({ counterInit = 0 }: CounterProps) {
	// counter readOnly çalışır
	// setCounter ise setter writeOnly çalışır
	const [counter, setCounter] = useState<number>(counterInit);
    // propslar sadece init aşamasında değerlerini state aktarırır.
	// function componentlerde value veya ref type olarak state ile çalışabiliriz.

	return (
		<>
			Sayaç : {counter}
			<br></br>
			<button onClick={() => setCounter(counter + 1)}>(+)</button>
			<button onClick={() => setCounter(counter - 1)}>(-)</button>
		</>
	);
}

export default CounterSample;

// Not: Function componentler life-cylcle method ile çalışmaz, direk özel hook dediğimiz, component içerisindeki süreci yeönetebileceğimiz yapılara sahiptir. Class Componentlerde ise hook bulunmaz.
