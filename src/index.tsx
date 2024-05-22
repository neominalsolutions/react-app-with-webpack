import ReactDOM from 'react-dom/client';
import React from 'react';

// uygulamanın ana doma basıldığı component.
export function App() {
	return <>React App Test1</>;
}

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// root element içerisinde bir tane react bileşeni render et dedik.
// rootElement.render(<>React App</>);
rootElement.render(<App />);
