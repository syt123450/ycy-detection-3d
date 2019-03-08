/**
 * @author syt123450 / https://github.com/syt123450
 */

import React, {Component} from 'react';
import './assets/font/material.css';
import './assets/font/zcool.css';
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
		this.selector = React.createRef();
		this.model = React.createRef();
		this.panel = React.createRef();
	}
	
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div className={'container'}>
					<Loading ref={this.loading}/>
					<Model ref={this.model} loading={this.loading}
					       panel={this.panel}/>
					<ControlPanel ref={this.panel} selector={this.selector}
					              model={this.model}/>
					<Selector ref={this.selector} model={this.model}
					          panel={this.panel}/>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
