import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './components/functions/app.function.component';
// import { App } from './components/classes/app.component';
// import App from './components/functions/app.function.component';

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// root element içerisinde bir tane react bileşeni render et dedik.
// rootElement.render(<>React App</>);
rootElement.render(
	<div>
		<App />
	</div>
);
