import React, {Component} from 'react';
import './App.css';
import { Model } from './components/Model';

class App extends Component {
	
	render() {
		return (
			<div className={'container'}>
				<Model />
			</div>
		);
	}
}

export default App;
