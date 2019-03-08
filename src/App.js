import React, {Component} from 'react';
import './assets/font/material.css';
import './App.css';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import {Model} from './components/Model';
import {Loading} from './components/Loading';
import {ControlPanel} from './components/ControlPanel';
import {Selector} from './components/Selector';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.loading = React.createRef();
		// this.exporter = React.createRef();
		// this.order = React.createRef();
	}
	
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className={'container'}>
					{/*<Loading ref={this.loading}/>*/}
					{/*<Model loading={this.loading}/>*/}
					<ControlPanel/>
					<Selector />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
