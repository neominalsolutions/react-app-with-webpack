import React from 'react';
import CounterSample from './counter-sample';

function App() {
	// <></> Fragment ile return edileceğini söyledik.
	return (
		<>
			<CounterSample counterInit={10} />
			{/* <CounterSample /> */}
		</>
	);
}

export default App;
