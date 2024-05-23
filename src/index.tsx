import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import AppLayout from './app-layout';
import { Router, RouterProvider } from 'react-router';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import UseRefSample from './components/functions/useRefHooks/useref-sample';
import UseEffectSample from './components/functions/useEffectHooks/use-effect-sample';
import UseEffectDropDownSample from './components/functions/useEffectHooks/use-effect-dropdown-sample';
import CounterSample from './components/functions/counter-sample';
import BodyMassIndexSample from './components/functions/useRefHooks/bmi-sample';
import TodoSample from './components/functions/todo-sample';
import TodoSamplePage from './pages/todo-sample-page';
import HomePage from './pages/home-page';
import UsersPage from './pages/users-page';
// import { App } from './components/classes/app.component';
// import App from './components/functions/app.function.component';

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// root element içerisinde bir tane react bileşeni render et dedik.
// rootElement.render(<>React App</>);

// client-side bir routing yapacağımız anlamına gelir.
const router = createBrowserRouter([
	{
		path: '',
		Component: AppLayout, // layout altındaki tüm componentler bu layout tasarım üzerinden çalışsın
		children: [
			{
				path: '',
				Component: HomePage,
			},
			{
				path: 'use-ref',
				Component: UseRefSample,
			},
			{
				path: 'use-effect',
				Component: UseEffectSample,
			},
			{
				path: 'use-effect-dropdown',
				Component: UseEffectDropDownSample,
			},
			{
				path: 'counter',
				Component: CounterSample,
			},
			{
				path: 'bmi',
				Component: BodyMassIndexSample,
			},
			{
				path: 'todo-single-component',
				Component: TodoSample,
			},
			{
				path: 'todo-multiple-component',
				Component: TodoSamplePage,
			},
			{
				path: 'users-axios',
				Component: UsersPage,
			},
		],
	},
	{
		path: '/admin',
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{
				path: '',
				element: <>Admin Home</>,
			},
			{
				path: 'users',
				element: <>Admin Users Page</>,
			},
		],
	},
]);

rootElement.render(
	<div>
		<RouterProvider router={router} />
	</div>
);
