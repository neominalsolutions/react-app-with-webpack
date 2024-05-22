import React from 'react';
import CounterSample from './counter-sample';
import TodoSample from './todo-sample';

function App() {
	// <></> Fragment ile return edileceğini söyledik.
	return (
		<>
			{/* <CounterSample counterInit={10} /> */}
			{/* <CounterSample /> */}
			<TodoSample />
		</>
	);
}

export default App;
