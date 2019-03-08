import React, {Component} from 'react';
import './App.css';
import { Model } from './components/Model';
import { Loading } from './components/Loading';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.loading = React.createRef();
		// this.exporter = React.createRef();
		// this.order = React.createRef();
	}
	
	render() {
		return (
			<div className={'container'}>
				<Loading ref={this.loading} />
				<Model loading={this.loading} />
			</div>
		);
	}
}

export default App;
