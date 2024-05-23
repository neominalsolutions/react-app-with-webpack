import React from 'react';
import CounterSample from './counter-sample';
import TodoSample from './todo-sample';
import TodoSamplePage from '../../pages/todo-sample-page';
import TodoList from './todos/todo-list';
import UseEffectSample from './useEffectHooks/use-effect-sample';
import UseEffectDropDownSample from './useEffectHooks/use-effect-dropdown-sample';
import UseRefSample from './useRefHooks/useref-sample';
import BodyMassIndex from './useRefHooks/vki-sample';

function App() {
	// <></> Fragment ile return edileceğini söyledik.
	return (
		<>
			{/* <CounterSample counterInit={10} /> */}
			{/* <CounterSample /> */}
			{/* <TodoSample /> */}
			{/* <TodoSamplePage /> */}
			{/* <TodoList todos={[{ title: 'a', completed: true, userId: 1, id: 1 }]} /> */}
			{/* <UseEffectSample /> */}
			{/* <UseEffectDropDownSample /> */}
			{/* <UseRefSample /> */}
			<BodyMassIndex />
		</>
	);
}

export default App;
