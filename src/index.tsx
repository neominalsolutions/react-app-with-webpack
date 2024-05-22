import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import imgSrc from './assets/images/AsenkronProgramlama.png';
import { ClassComponentSample } from './components/class-component-sample';

// uygulamanın ana doma basıldığı component.
export function App() {
	return (
		<>
			React App Test1
			{/* inline-style */}
			<div style={{ color: 'red' }}>Inline Style</div>
			{/* external style işlemi */}
			<div className="container">Externel CSS</div>
			<img src={imgSrc} />
		</>
	);
}

const rootElement = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

// root element içerisinde bir tane react bileşeni render et dedik.
// rootElement.render(<>React App</>);
rootElement.render(
	<div>
		<ClassComponentSample text="sample-1" content="test-1" />
		<ClassComponentSample text="sample-2" />
		<a href="www.a.com"></a>
	</div>
);
