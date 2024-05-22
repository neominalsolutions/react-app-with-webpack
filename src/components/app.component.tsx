import React, { Component } from 'react';
import imgSrc from './../assets/images/AsenkronProgramlama.png';
import { ClassComponentSample } from './class-component-sample';
// React uygulamasının componentleri doma bastı boostrapt edildiği yer burası.
type AppProps = {};
type AppState = { visible: boolean };
export class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = { visible: true };
	}

	render(): React.ReactNode {
		return (
			<>
				Visible : {this.state.visible ? 'true' : 'false'}
				<br></br>
				<button onClick={() => this.setState({ visible: !this.state.visible })}>
					Toogle Button
				</button>
				<hr></hr>
				{this.state.visible && (
					<ClassComponentSample text="sample-1" content="test-1" />
				)}
				<hr></hr>
				{/* inline-style */}
				{/* <div style={{ color: 'red' }}>Inline Style</div> */}
				{/* external style işlemi */}
				{/* <div className="container">Externel CSS</div>
				<img src={imgSrc} />
				<br></br> */}
			</>
		);
	}
}
