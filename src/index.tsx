import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { App } from './components/app.component';

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
